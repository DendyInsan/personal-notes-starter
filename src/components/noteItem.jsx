import React from 'react';
import NoteContent from './noteContent';
import NoteAction from './noteAction';

function NoteItem({ title, createdAt, body, id,  onDelete, onArchived, archived  }) {
 return (
   <div className="note-item">
     <NoteContent title={title} createdAt={createdAt} body={body} />
     <NoteAction  id={id} onDelete={onDelete} onArchived={onArchived} archived={archived} />
   </div>
 );
}
 
export default NoteItem;