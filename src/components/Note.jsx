import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function Note(props) {
 
  function deleteNote(event){
    event.preventDefault();
    props.delete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteNote}><DeleteOutlineIcon /></button>
    </div>
  );
}

export default Note;
