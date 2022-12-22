import classes from './Header.module.css'
import Badge from './Badge'

function Header() {
    return <header className={classes.header}>
        <h1>ReduxCart</h1>
        <button className={classes.cart_btn}>
            <span>My Cart</span>
            <Badge className={classes.hover} count='25' />
        </button>
    </header>
}
export default Header