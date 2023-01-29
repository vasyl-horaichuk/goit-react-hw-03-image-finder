import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  handleToggelModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const { webformatURL, user, largeImageURL } = this.props.image;
    const { isModalOpen } = this.state;
    return (
      <>
        <GalleryItem onClick={this.handleToggelModal} className="gallery-item">
          <GalleryItemImg src={webformatURL} alt={user} />
        </GalleryItem>
        {isModalOpen && (
          <Modal onClose={this.handleToggelModal} largeImg={largeImageURL} />
        )}
      </>
    );
  }
}
