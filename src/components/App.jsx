import React, { Component } from 'react';
import { fetchImages } from 'service/fetchImages';
import { Searchbar } from './Searchbar/Searchbar';
// import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Button } from './Button/Button';
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

    if (prevState.images.length !== images.length) {
      fetchImages(query, page).then(response => {
        this.setState(({ images }) => ({
          images: [...images, ...response.hits],
        }));
      });
    }
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        {/* <ImageGallery />
        <Button /> */}
        {/* <Modal /> */}
      </div>
    );
  }
}
