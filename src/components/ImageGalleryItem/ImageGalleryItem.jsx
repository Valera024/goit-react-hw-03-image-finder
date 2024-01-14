import { Component } from "react";
import styles from "./imageGalleryItem.module.css"

class ImageGalleryItem extends Component {
    render() {
        const { images } = this.props
        return (
        <>
            {images.map((image) => (
                <li key={image.id} className={styles.galleryItem} >
                    <img src={image.webformatURL} alt={image.tags} className={styles.image} data-large-image={image.largeImageURL}/>
                </li>
            ))}
        </>
        )
    }
}

export default ImageGalleryItem