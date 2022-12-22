import classes from './Product.module.css'
import { useDispatch } from 'react-redux'
import { cartActions } from '../store/cart-slice'

function Product(props) {
    const dispatch = useDispatch()

    function addToCartHandler() {
        dispatch(cartActions.addItemToCart({
            id: props.id,
            title: props.title,
            description: props.description,
            price: props.price
        }))
    }

    return <li key={props.id} className={classes.product}>
        <div className={classes.produc_detail}>
            <p className={classes.title}>{props.title}</p>
            <p className={classes.price_container}>
                <span className={classes.price_tag}>$</span>
                <span className={classes.price}>{props.price}</span>
            </p>
        </div>
        <div className={classes.description}>
            {props.description}
        </div>
        <div className={classes.actions}>
            <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
    </li>
}
export default Product