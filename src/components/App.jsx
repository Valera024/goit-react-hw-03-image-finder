import { Component } from "react";
import { fetchSearch } from "./pixabay-api";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";

class App extends Component {
  state = {
    images: [],
    page: 1,
    perPage: 12,
    filter: '',
    selectImage: null
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const filterValue = document.querySelector("input[name='searchbar']").value;
    this.setState(({ page: 1, images: [], filter: filterValue }),
      this.fetchData.bind(this)
    )
  }

  onClickLargeImg = (event) => {
    if (event.target.closest("img")) {
      const largeImage = event.target.dataset.largeImage
      this.setState({ selectImage: largeImage }, () => {
        console.log(this.state)
        const modal = document.querySelector("#modal")
        modal.style.display = "block"
      })
    }
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
    const btn = this.state.images.length > 0 ? <Button onClick={this.onClickMore} /> : "";
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={this.state.images} onClick={ this.onClickLargeImg} />
        {btn}
        <Modal image={ this.state.selectImage} />
      </>
    );
  }
}

export default App