import classes from './Product.module.css'

function Product() {
    return <li className={classes.product}>
        <div className={classes.produc_detail}>
            <p className={classes.title}>Cheese Burger</p>
            <p className={classes.price_container}>
                <span className={classes.price_tag}>$</span>
                <span className={classes.price}>6.00</span>
            </p>
        </div>
        <div className={classes.description}>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content
        </div>
        <div className={classes.actions}>
            <button>Add to Cart</button>
        </div>
    </li>
}
export default Product