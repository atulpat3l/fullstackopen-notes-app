import noteService from '../services/notes';

const Note = ({ note, toggleImportance, updateNotes }) => {
  const label = note.important ? 'make not important' : 'make important';

  const deleteNote = async () => {
    await noteService.deleteOne(note.id);
    updateNotes(note.id);
  };

  return (
    <li className="note">
      {note.content}
      <button onClick={toggleImportance}>{label}</button>&nbsp;
      <button onClick={deleteNote}>delete</button>
    </li>
  );
};

export default Note;
