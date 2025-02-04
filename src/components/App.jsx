import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setnotes] = useState([]);

  function addNote(Note) {
    setnotes((prevNote) => {
      return [...prevNote, Note];
    });
  }

  function DeleteNote(id) {
    setnotes((prevNote) => {
      return prevNote.filter((notesitem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((notesitem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={notesitem.title}
            content={notesitem.content}
            onDelete={DeleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
