import React, { useState } from 'react';

const NoteForm = ({ createNote }) => {
  const [newNote, setNewNote] = useState('');

  const handleChange = ({ target }) => {
    setNewNote(target.value);
  };

  const addNote = (event) => {
    event.preventDefault();
    createNote({
      content: newNote,

      important: Math.random() > 0.5,
    });
    setNewNote('');
  };

  return (
    <div>
      <h2>Create a Note</h2>
      <form onSubmit={addNote}>
        <input
          name="note"
          value={newNote}
          onChange={handleChange}
          placeholder="write here note content"
        />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default NoteForm;
