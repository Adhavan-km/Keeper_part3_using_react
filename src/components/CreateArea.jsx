import React, { useState } from "react";

function CreateArea(props) {
  const [Note, setNote] = useState({
    title: "",
    content: "",
  });

  function handlechange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote() {
    props.onAdd(Note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          name="title"
          value={Note.title}
          placeholder="Title"
          onChange={handlechange}
        />
        <textarea
          name="content"
          value={Note.content}
          placeholder="Take a note..."
          onChange={handlechange}
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
