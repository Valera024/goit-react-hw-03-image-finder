import { Component } from "react";
import { fetchSearch } from "./pixabay-api";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import Loader from "./Loader/Loader";

class App extends Component {
  state = {
    images: [],
    page: 1,
    perPage: 12,
    filter: '',
    selectImage: null,
    isModalOpen: false,
    loading: false
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const filterValue = document.querySelector("input[name='searchbar']").value;
     this.setState({
      page: 1,
      images: [],
      filter: filterValue,
      loading: true, 
    }, async () => {
    try {
      await this.fetchData();
    } finally {
      this.setState({ loading: false });
    }
  });
};

  onClickLargeImg = (event) => {
    if (event.target.closest("img")) {
      const largeImage = event.target.dataset.largeImage
      this.openModal(largeImage)
    }
  }

  openModal = (largeImage) => {
  this.setState({ selectImage: largeImage, isModalOpen: true });
}

closeModal = () => {
  this.setState({ selectImage: null, isModalOpen: false });
}


  onClickMore = () => {
    this.setState(
      (prevState) => ({
        page: prevState.page + 1,
      }),
      this.fetchData
    );
  };

  async fetchData() {
    try {
      const response = await fetchSearch(this.state.page, this.state.perPage, this.state.filter);
      this.setState((prevState) => {
        if (prevState.images.length > 0) {
          return {
            images: [...prevState.images, ...response.data.hits],
          };
        } else {
          return { images: response.data.hits };
        }
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  render() {
    const { images, loading } = this.state;
    const btn = this.state.images.length > 0 ? <Button onClick={this.onClickMore} /> : "";
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {loading && <Loader visible={true} />} 
        <ImageGallery images={images} onClick={this.onClickLargeImg} />
        {btn}
        {this.state.isModalOpen && (
          <Modal image={this.state.selectImage} onClose={this.closeModal} />
        )}
      </>
    );
  }
}

export default App