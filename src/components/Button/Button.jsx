import { Component } from "react";
import styles from "./button.module.css"

class Button extends Component {
    render() {
        const {onClick} = this.props
        return (
            <button className={styles.button} onClick={onClick}>Load More</button>
        )
    }
}

export default Button