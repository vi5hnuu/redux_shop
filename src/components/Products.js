import classes from './Products.module.css'
import Product from './Product'
const DUMMY_PRODUCTS = [
    {
        id: 'p1',
        price: 1200.00,
        quantity: 1,
        title: 'Cheese',
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content"
    },
    {
        id: 'p2',
        price: 800.00,
        quantity: 2,
        title: 'Ghee',
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content"
    }
]
function Products() {
    return <section className={classes.container}>
        <div className={classes.products_header}>
            <p className={classes.title}>Buy Your Favourite Products</p>
        </div>
        <div className={classes.products}>
            <ul className={classes.products_list}>
                {
                    DUMMY_PRODUCTS.map(product => {
                        return <Product
                            id={product.id}
                            key={product.id}
                            description={product.description}
                            price={product.price}
                            title={product.title}
                        />
                    })
                }
            </ul>
        </div>
    </section>
}

export default Products