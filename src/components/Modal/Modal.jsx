import { Component } from 'react';

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
      <div className="Overlay" onClick={onClose}>
        <div className="Modal">
          <img src={largeImg} alt={user} />
        </div>
      </div>
    );
  }
}
