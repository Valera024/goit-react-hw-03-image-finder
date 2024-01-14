import { Component } from "react";
import styles from "./searchbar.module.css"

class Searchbar extends Component {
    render() {
        const {onSubmit} = this.props
        return (
            <header className={styles.searchbar}>
                <form className={styles.form} onSubmit={onSubmit}>
                    <button type="submit" className={styles.button}>
                        <span className={styles.buttonLabel}>🔍</span>    
                    </button>
                    <input className={styles.input} name="searchbar" type="text" autoComplete="off" autoFocus placeholder="Search images and photos"/>
                </form>
            </header>
        )
    }
}

export default Searchbar