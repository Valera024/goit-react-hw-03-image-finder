import { Component } from "react";
import styles from "./modal.module.css"

class Modal extends Component {
    render() {
        const selectImage = this.props
        return (
            <div id="modal" className={styles.overlay} >
                <div className={styles.modal}>
                    <img src={selectImage.image} />
                </div>
            </div>
        )
    }
}

export default Modal