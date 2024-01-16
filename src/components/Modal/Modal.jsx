import { Component } from "react";
import styles from "./modal.module.css"

class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.closeKey)
        document.documentElement.style.overflow = "hidden"
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.closeKey)
        document.documentElement.style.overflowY = "auto"
    }

    closeKey = (event) => {
        if (event.code === "Escape") {
            this.props.onClose()
        }
    }

    handleClickOutside = (event) => {
        if (event.target === event.currentTarget) {
            this.props.onClose()
        }
    }

    render() {
        const { image } = this.props
        const overlayClass = this.props.isModalOpen ? `${styles.overlay} ${styles.overlayVisible}` : styles.overlay;
  return (
    <div className={overlayClass} onClick={this.handleClickOutside}>
      <div className={styles.modal}>
        <img src={image} alt="big img"  />
      </div>
    </div>
        )
    }
}

export default Modal