import React from "react";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [note, setNote] = React.useState({
    title: "",
    content: ""
  });

  const [isClicked , setIsClicked] = React.useState(false);

  function clicked(){
        setIsClicked (true);
  }

  function changeHandler(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }

  function onSubmit(event) {
     event.preventDefault();
     props.onAdd(note);
     setNote({title: "", content: ""});
  }

  return (
    <div>
        <form className="create-note">

        {isClicked && (
        <input
          name="title"
          onChange={changeHandler}
          value={note.title}
          placeholder="Title"
        />
        )}
      
        <textarea
          onClick={clicked}
          name="content"
          onChange={changeHandler}
          value={note.content}
          placeholder="Take a note..."
          rows={isClicked?3:1}
        />
        <Zoom in={isClicked}>
        <button onClick={onSubmit}><NoteAddIcon /></button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
