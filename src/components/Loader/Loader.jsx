import { ProgressBar } from "react-loader-spinner";
import { Component } from "react";
import styles from "./loader.module.css"

class Loader extends Component {
    render() {
        return (
            <ProgressBar
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}} 
        wrapperClass={styles.loader}  
      />
        )
    }
}

export default Loader