import { Component } from "react";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import styles from "./imageGallery.module.css"

class ImageGallery extends Component {
    render() {
        const {onClick} = this.props
        const { images } = this.props
        return (
            <ul className={styles.gallery} onClick={onClick}>
                <ImageGalleryItem images={images} />
            </ul>
        )
    }
}

export default ImageGallery