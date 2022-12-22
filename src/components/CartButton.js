import classes from './CartButton.module.css'
import Badge from './Badge'
import { uiActions } from '../store/ui-slice'
import { useDispatch, useSelector } from 'react-redux'

function CartButton() {
    const dispatch = useDispatch()
    const cartQuantity = useSelector(state => state.cart.totalQuantity)

    function toggleCartHandler() {
        dispatch(uiActions.toggle())
    }

    return <button onClick={toggleCartHandler} className={classes.cart_btn}>
        <span>My Cart</span>
        <Badge className={classes.hover} count={cartQuantity} />
    </button>
}

export default CartButton