import { Component } from 'react';

import { Overflow, ModalWindow } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onCloseByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseByEsc);
  }

  onCloseByEsc = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { user, largeImg, onClose } = this.props;
    return (
      <Overflow onClick={onClose}>
        <ModalWindow>
          <img src={largeImg} alt={user} />
        </ModalWindow>
      </Overflow>
    );
  }
}
