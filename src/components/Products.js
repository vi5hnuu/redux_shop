import classes from './Products.module.css'
import Product from './Product'

function Products() {
    return <section className={classes.container}>
        <div className={classes.products_header}>
            <p className={classes.title}>Buy Your Favourite Products</p>
        </div>
        <div className={classes.products}>
            <ul className={classes.products_list}>
                <Product />
            </ul>
        </div>
    </section>
}

export default Products