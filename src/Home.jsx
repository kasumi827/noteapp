import React from 'react'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import './App.css'
import uuid from "react-uuid";
import { useEffect, useState } from 'react';

const Home = () => {
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);
    const [activeNote, setActiveNote] = useState(false);
  
    useEffect(() => {
      //ローカルストレージにノートを保存する
      localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);
  
    useEffect(() => {
      setActiveNote(notes[0].id);
    }, []);
  
    const onDeleteNote = (id) => {
      const filterNotes = notes.filter((note) => note.id !== id);
      setNotes(filterNotes);
    }
  
    const getActiveNote = () => {
      return notes.find((note) => note.id === activeNote)
    }
  
    const onAddNote = () => {
      console.log("新しくノートが追加されました");
      const newNote = {
        id: uuid(),
        title: "新しいノート",
        content: "新しいノートの内容",
        modDate: Date.now(),
      }
      setNotes([...notes, newNote]);
      console.log(notes);
    }
  
    const onUpdateNote = (updatedNote) => {
      //修正された新しいノートの配列を返す。
      const updatedNotesArray = notes.map((note) => {
        if (note.id === updatedNote.id) {
          return updatedNote;
        } else {
          return note;
        }
      });
  
      setNotes(updatedNotesArray);
    };

  return (
      <div className="App">
          <Sidebar onAddNote={onAddNote} notes={notes} onDeleteNote={onDeleteNote} activeNote={activeNote} setActiveNote={setActiveNote} />
          <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
        </div>
  )
}

export default Home