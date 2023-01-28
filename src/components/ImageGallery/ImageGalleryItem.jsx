export const ImageGalleryItem = ({ image }) => {
  const { webformatURL, user } = image;
  return (
    <li className="gallery-item">
      <img src={webformatURL} alt={user} />
    </li>
  );
};
