import React from 'react';
import NoteList from './NoteList';  // Impor komponen NoteList
import NoteForm from './NoteForm';  // Impor komponen NoteForm
import NoteListEmpty from './noteListEmpty'; // Impor komponen NoteListEmpty

function NoteBody({ notes, onAddNote, onDelete, onArchived, archived }) {
    const activeNotes = notes.filter(note => !note.archived);
    const archivedNotes = notes.filter(note => note.archived);
  return (
    <div className="note-app__body">
      {/* Form untuk menambah catatan */}
      <NoteForm addNote={onAddNote} />
      <h2>Catatan Aktif</h2>
      {/* List catatan */}
      {activeNotes.length > 0 ? (
        <NoteList notes={activeNotes} onDelete={onDelete} onArchived={onArchived} />
      ) : (
        <NoteListEmpty />
      )}
      <h2>Arsip</h2>
       {/* Kondisi untuk menampilkan daftar catatan yang diarsipkan atau pesan kosong */}
       {archivedNotes.length > 0 ? (
        <NoteList notes={archivedNotes} onDelete={onDelete} onArchived={onArchived} archived={archived} />
      ) : (
        <NoteListEmpty />
      )}

    </div>
  );
}

export default NoteBody;