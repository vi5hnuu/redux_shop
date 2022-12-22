import classes from './CartItem.module.css'
import { useDispatch } from 'react-redux'
import { cartActions } from '../store/cart-slice'

function CartItem(props) {
    const dispatch = useDispatch()

    function incrementQuantityHandler() {
        dispatch(cartActions.addItemToCart({
            id: props.id,
        }))
    }
    function decrementQuantityHandler() {
        dispatch(cartActions.removeItemFromCart(props.id))
    }

    return <li key={props.id} className={classes.cart_item}>
        <div className={classes.item_detail}>
            <div className={classes.title_container}>
                <p className={classes.title}>{props.title}</p>
                <span className={classes.times}>x</span>
                <span className={classes.quantity}>{props.quantity}</span>
            </div>
            <div className={classes.price_container}>
                <p className={classes.price_total}>
                    <span className={classes.price_tag}>$</span>
                    <span >{props.totalPrice}</span>
                </p>
                <p className={classes.price_per_item}>
                    <span className={classes.price_tag}>$</span>
                    <span>({props.totalPrice / props.quantity}/item)</span>
                </p>
            </div>
        </div>
        <div className={classes.description}>
            <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
            <button onClick={decrementQuantityHandler}>-</button>
            <button onClick={incrementQuantityHandler}>+</button>
        </div>
    </li>
}

export default CartItem