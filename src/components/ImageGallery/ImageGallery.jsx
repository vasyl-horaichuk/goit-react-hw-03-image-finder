import { ImageGalleryItem } from './ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <GalleryList>
      {images.map(img => {
        return <ImageGalleryItem key={img.id} image={img} />;
      })}
    </GalleryList>
  );
};
