import { Component } from "react";
import { fetchSearchUser } from "./pixabay-api";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";

class App extends Component {
  state = {
    images: [],
    page: 1,
    perPage: 12
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState(({ page: 1 }),
      this.fetchData.bind(this)
    )
  }
  
  componentDidMount() {
    this.setState(({ page: 1 }),
      this.fetchData
    )
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
      const response = await fetchSearchUser(this.state.page, this.state.perPage);
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
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={this.state.images} />
        <Button onClick={this.onClickMore} />
      </>
    );
  }
}

export default App