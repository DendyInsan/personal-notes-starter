import React from 'react';

function NoteHeader({ searchTerm, onSearch }) {
    return (
      <div className="note-app__header">
          <h1>Notes</h1>
          <div className="note-search">
              <input type="text" placeholder='Cari catatan...' value={searchTerm} onChange={(event) => onSearch(event.target.value)}></input>
          </div>
      </div>
    );
   }
    
   export default NoteHeader;