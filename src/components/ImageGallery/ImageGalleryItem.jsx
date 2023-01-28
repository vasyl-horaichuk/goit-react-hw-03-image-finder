import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';

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
        <li onClick={this.handleToggelModal} className="gallery-item">
          <img src={webformatURL} alt={user} />
        </li>
        {isModalOpen && (
          <Modal onClose={this.handleToggelModal} largeImg={largeImageURL} />
        )}
      </>
    );
  }
}
