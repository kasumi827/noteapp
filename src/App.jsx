// import { useEffect, useState } from 'react';
import './App.css'
// import Main from './components/Main'
// import Sidebar from './components/Sidebar'
// import uuid from "react-uuid";
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from './components/Login';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import Home from './Home';

function App() {

  // const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);
  // const [activeNote, setActiveNote] = useState(false);

  // useEffect(() => {
  //   //ローカルストレージにノートを保存する
  //   localStorage.setItem("notes", JSON.stringify(notes));
  // }, [notes]);

  // useEffect(() => {
  //   setActiveNote(notes[0].id);
  // }, []);

  // const onDeleteNote = (id) => {
  //   const filterNotes = notes.filter((note) => note.id !== id);
  //   setNotes(filterNotes);
  // }

  // const getActiveNote = () => {
  //   return notes.find((note) => note.id === activeNote)
  // }

  // const onAddNote = () => {
  //   console.log("新しくノートが追加されました");
  //   const newNote = {
  //     id: uuid(),
  //     title: "新しいノート",
  //     content: "新しいノートの内容",
  //     modDate: Date.now(),
  //   }
  //   setNotes([...notes, newNote]);
  //   console.log(notes);
  // }

  // const onUpdateNote = (updatedNote) => {
  //   //修正された新しいノートの配列を返す。
  //   const updatedNotesArray = notes.map((note) => {
  //     if (note.id === updatedNote.id) {
  //       return updatedNote;
  //     } else {
  //       return note;
  //     }
  //   });

  //   setNotes(updatedNotesArray);
  // };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          
          <Route path="/home" element={<Home />}></Route>
          {/* <Route path="/main" element={<Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />}></Route> */}
          {/* <Route path="/sidebar" element={<Sidebar onAddNote={onAddNote} notes={notes} onDeleteNote={onDeleteNote} activeNote={activeNote} setActiveNote={setActiveNote} />}></Route> */}
          {/* <Route path="/login" element={<Login setIsAuth={setIsAuth}  />}></Route> */}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<Logout/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;