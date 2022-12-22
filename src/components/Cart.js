import classes from './Cart.module.css'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'



function Cart() {
    const citems = useSelector(state => state.cart.items)

    return <section className={classes.container}>
        <div className={classes.cart_header}>
            <p className={classes.title}>Shopping Cart</p>
        </div>
        <div className={classes.cart}>
            <ul className={classes.cart_list}>
                {
                    citems.map(item => {
                        return <CartItem
                            key={item.id}
                            id={item.id}
                            price={item.price}
                            quantity={item.quantity}
                            totalPrice={item.totalPrice}
                            title={item.title}
                            description={item.description}
                        />
                    })
                }
            </ul>
        </div>
    </section>
}

export default Cart