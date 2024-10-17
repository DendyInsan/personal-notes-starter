import React from 'react';
import DeleteButton from './deleteButton';
import ArchiveButton from './archiveButton';
 
function NoteAction({  id,  onDelete, onArchived, archived  }) {
    return (
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchiveButton id={id} archived={archived} onArchived={onArchived} />
      </div>
    );
   }
    
   export default NoteAction;