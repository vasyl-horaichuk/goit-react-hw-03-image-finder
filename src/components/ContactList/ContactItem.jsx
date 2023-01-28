export const ContactItem = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <>
      <p>
        {name}:{number}
      </p>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
};
