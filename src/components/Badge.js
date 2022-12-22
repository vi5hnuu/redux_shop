import classes from './Badge.module.css'

function Badge(props) {
    return <span className={classes.badge}>{props.count}</span>
}

export default Badge