import { ContactItem } from './ContactItem';

export const ContactList = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <ContactItem contact={item} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};
