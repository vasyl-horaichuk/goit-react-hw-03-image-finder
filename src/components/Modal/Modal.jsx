import { Component } from 'react';

export class Modal extends Component {
  render() {
    const { user, largeImg, onClose } = this.props;
    return (
      <div className="Overlay" onClick={onClose}>
        <div className="Modal">
          <img src={largeImg} alt={user} />
        </div>
      </div>
    );
  }
}
