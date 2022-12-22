import classes from './Notification.module.css'
import { createPortal } from 'react-dom'

function Notification(props) {
    return createPortal(
        <div className={`${classes[props.status]} ${classes.notification}`}>
            <span className={classes.title}>{props.title}</span>
            <span className={classes.message}>{props.message}</span>
        </div>, document.querySelector('body')
    )
}

export default Notification