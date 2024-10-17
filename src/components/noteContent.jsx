import React from 'react';
     
function NoteContent({title, body, createdAt }) {
  const date = new Date(createdAt);
  const options = { weekday: 'long', day: '2-digit', month: 'short', year: 'numeric' };
  const formatDate =date.toLocaleDateString('id-ID', options);
 return (
   <div className="note-item__content">
       <h3 className="note-item__title">{title}</h3>
       <p className="note-item__date">{formatDate}</p>
       <p className="note-item__body">{body}</p>
   </div>
 );
}
 
export default NoteContent;