import React from 'react';
import NoteItem from './noteItem';

function NoteList({ notes, onDelete, onArchived, archived }) {
    return (
      <div className="notes-list">
        {
          notes.map((note) => (
           <NoteItem 
           key={note.id}
           id={note.id}
           onDelete={onDelete}
           onArchived={onArchived}
           archived={archived}
           {...note} />
         ))
        }
      </div>
    );
   }
    
   export default NoteList;