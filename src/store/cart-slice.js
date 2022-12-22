import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";
import { getDatabase, set, ref, get } from 'firebase/database'


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalAmount: 0
    },
    reducers: {
        replaceCart(state, action) {
            state.items = action.payload.items
            state.totalQuantity = action.payload.totalQuantity
            state.totalAmount = action.payload.totalAmount
        },
        addItemToCart(state, action) {
            const item = action.payload
            const existingItem = state.items.find(pd => item.id === pd.id)
            if (!existingItem) {
                state.items.push({
                    id: item.id,
                    price: item.price,
                    quantity: 1,
                    totalPrice: item.price,
                    title: item.title,
                    description: item.description
                })
            } else {
                existingItem.quantity += 1
                existingItem.totalPrice += existingItem.price
            }
            state.totalQuantity++
        },
        removeItemFromCart(state, action) {
            const id = action.payload
            const existingItem = state.items.find(pd => pd.id === id)
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id)
            } else {
                existingItem.quantity -= 1
                existingItem.totalPrice -= existingItem.price
            }
            state.totalQuantity--
        }
    }
})


//thunk 
export const sendCartData = (cartData) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification(
            {
                status: 'pending',
                title: 'sending...',
                message: 'preparing to send cart items...'
            }
        ))
        try {
            const db = getDatabase();

            await set(ref(db, 'cart'), cartData.items.length === 0 ? null : cartData);
            dispatch(uiActions.showNotification(
                {
                    status: 'success',
                    title: 'sent...',
                    message: 'successfully sent cart items...'
                }
            ))
        } catch (error) {
            dispatch(uiActions.showNotification(
                {
                    status: 'error',
                    title: 'sending failed.',
                    message: 'unable to send cart items...'
                }
            ))
        }
        setTimeout(() => {
            dispatch(uiActions.toggleNotification())
        }, 1000);
    }
}
export const loadCartData = () => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification(
            {
                status: 'pending',
                title: 'loading...',
                message: 'preparing to get cart items...'
            }
        ))
        try {
            const db = getDatabase();
            const snapshots = await get(ref(db, 'cart'));
            if (snapshots.exists()) {
                const cart = snapshots.val()
                dispatch(cartSlice.actions.replaceCart(cart))
            }

            dispatch(uiActions.showNotification(
                {
                    status: 'success',
                    title: 'loaded...',
                    message: 'successfully loaded cart items...'
                }
            ))
        } catch (error) {
            dispatch(uiActions.showNotification(
                {
                    status: 'error',
                    title: 'loading failed.',
                    message: 'unable to load cart items...'
                }
            ))
        }
        setTimeout(() => {
            dispatch(uiActions.toggleNotification())
        }, 1000);
    }
}

export const cartActions = cartSlice.actions
export default cartSlice