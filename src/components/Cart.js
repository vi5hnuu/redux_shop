import classes from './Cart.module.css'
import CartItem from './CartItem'

function Cart() {
    return <section className={classes.container}>
        <div className={classes.cart_header}>
            <p className={classes.title}>Shopping Cart</p>
        </div>
        <div className={classes.cart}>
            <ul className={classes.cart_list}>
                <CartItem />
            </ul>
        </div>
    </section>
}

export default Cart