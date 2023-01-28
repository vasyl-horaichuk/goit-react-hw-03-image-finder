import React, { Component } from 'react';
import { fetchImages } from 'service/fetchImages';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
// import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };

  handleSubmit = query => {
    this.setState({ query });
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, images, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      fetchImages(query, page).then(response => {
        this.setState(({ images }) => ({
          images:
            page === 1 ? [...response.hits] : [...images, ...response.hits],
        }));
      });
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} />
        {!!this.state.images.length && <Button onClick={this.handleLoadMore} />}
        {/* <Modal /> */}
      </div>
    );
  }
}
