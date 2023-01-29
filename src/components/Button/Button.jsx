import { ButtonLoadMore } from './Button.styled';
import { TiArrowSync } from 'react-icons/ti';

export const Button = ({ onClick }) => {
  return (
    <ButtonLoadMore type="button" onClick={onClick}>
      <TiArrowSync size={25} stroke="white" />
      Load more
    </ButtonLoadMore>
  );
};
