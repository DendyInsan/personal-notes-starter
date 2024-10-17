import React, { useState } from 'react';
import NoteHeader from './noteHeader';  // Impor komponen NoteHeader
import NoteBody from './noteBody';  // Impor komponen NoteBody
import { getInitialData } from '../utils/index';  // Impor data dari utils

function NoteApp() {
  const [notes, setNotes] = useState(getInitialData());  // State untuk daftar catatan
  const [searchTerm, setSearchTerm] = useState('');  // State untuk pencarian

  // Fungsi untuk menangani pencarian
  const onSearchChangeHandler = (term) => {
    setSearchTerm(term);
  };

  // Filter notes berdasarkan searchTerm
  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Fungsi untuk menambahkan catatan baru
  const addNote = ({ title, body }) => {
    const newNote = {
      id: +new Date(),  // Menggunakan timestamp sebagai id
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false,  // Status arsip default adalah false
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  // Fungsi untuk menghapus catatan
  const onDeleteHandler = (id) => {
    const filteredNotes = notes.filter(note => note.id !== id);
    setNotes(filteredNotes);
  };

  // Fungsi untuk mengarsipkan catatan
  const onArchivedHandler = (id) => {
    const updatedNotes = notes.map((note) => 
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    setNotes(updatedNotes);
  };

  return (
    <div className="note-app">
      {/* Komponen Header dengan pencarian */}
      <NoteHeader searchTerm={searchTerm} onSearch={onSearchChangeHandler} />
      
      {/* Komponen Body dengan daftar catatan dan form */}
      <NoteBody 
        notes={filteredNotes} 
        onAddNote={addNote} 
        onDelete={onDeleteHandler} 
        onArchived={onArchivedHandler} 
       
      />
    </div>
  );
}

export default NoteApp;
