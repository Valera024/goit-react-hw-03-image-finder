import { Component } from "react";
import styles from "./button.module.css"

class Button extends Component {
    render() {
        const {onClick} = this.props
        return (
            <div className={styles.container}>
                <button className={styles.button} onClick={onClick}>Load More</button>
            </div>
        )
    }
}

export default Button