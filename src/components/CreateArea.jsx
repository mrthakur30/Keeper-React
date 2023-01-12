import React from "react";

function CreateArea(props) {
  const [note, setNote] = React.useState({
    title: "",
    content: ""
  });

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
      <form>
        <input
          name="title"
          onChange={changeHandler}
          value={note.title}
          placeholder="Title"
        />
        <textarea

          name="content"
          onChange={changeHandler}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={onSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
