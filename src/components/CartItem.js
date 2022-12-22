import classes from './CartItem.module.css'

function CartItem() {
    return <li className={classes.cart_item}>
        <div className={classes.item_detail}>
            <div className={classes.title_container}>
                <p className={classes.title}>Cheese Burger</p>
                <span className={classes.times}>x</span>
                <span className={classes.quantity}>{5}</span>
            </div>
            <div className={classes.price_container}>
                <p className={classes.price_total}>
                    <span className={classes.price_tag}>$</span>
                    <span >18.00</span>
                </p>
                <p className={classes.price_per_item}>
                    <span className={classes.price_tag}>$</span>
                    <span>(6.00/item)</span>
                </p>
            </div>
        </div>
        <div className={classes.actions}>
            <button>-</button>
            <button>+</button>
        </div>
    </li>
}

export default CartItem