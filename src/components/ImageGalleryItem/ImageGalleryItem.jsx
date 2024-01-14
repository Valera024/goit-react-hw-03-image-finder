import { Component } from "react";
import styles from "./imageGalleryItem.module.css"

class ImageGalleryItem extends Component {
    render() {
        const { images } = this.props
        console.log(images)
        return (
        <>
            {images.map((image) => (
                <li key={image.id} className={styles.galleryItem}>
                    <img src={image.webformatURL} alt={image.tags} className={styles.image} />
                </li>
            ))}
        </>
        )
    }
}

export default ImageGalleryItem