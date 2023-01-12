import React from 'react'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import './App.css'
import uuid from "react-uuid";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { doc, setDoc } from "firebase/firestore"; 

const Home = ({ isAuth }) => {
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);
    const [activeNote, setActiveNote] = useState(false);
    const navigate = useNavigate();
    // const tasks = firebase.firestore().collection('tasks');

    await setDoc(doc(db, "tasks", "LA"), {
        id: uuid(),
        title: "無題",
        content: "新しいノートの内容",
        modDate: Date.now(),
        userId: auth.currentUser.uid,
    });
    
    const cityRef = doc(db, 'tasks', 'LA');
    setDoc(cityRef, { capital: true }, { merge: true });
  
    useEffect(() => {
      //ローカルストレージにノートを保存する
      localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    useEffect(() => {
        if (!isAuth) {
            navigate("./login");
        }
    }, []);
  
    const onDeleteNote = (id) => {
      const filterNotes = notes.filter((note) => note.id !== id);
      setNotes(filterNotes);
    }
  
    const getActiveNote = () => {
      return notes.find((note) => note.id === activeNote)
    }
  
    // await setDoc(doc(db, "tasks", "tasksId"), {
    //     id: uuid(),
    //     title: "新しいノート",
    //     content: "新しいノートの内容",
    //     modDate: Date.now(),
    //     userId: auth.currentUser.uid,
    // });

    const onAddNote = async () => {
        // db.collection("tasks").add({
        //     id: uuid(),
        //     title: "新しいノート",
        //     content: "新しいノートの内容",
        //     modDate: Date.now(),
        //     userId: auth.currentUser.uid,
        // }).then(ref => {
        //     console.log(ref.id)
        // });


      const newNote = {
        id: uuid(),
        title: "無題",
        content: "新しいノートの内容",
        modDate: Date.now(),
        userId: auth.currentUser.uid,
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
      <div className="App home">
          <Sidebar onAddNote={onAddNote} notes={notes} onDeleteNote={onDeleteNote} activeNote={activeNote} setActiveNote={setActiveNote} />
          <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
        </div>
  )
}

export default Home