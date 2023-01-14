import React from 'react'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import './App.css'
import uuid from "react-uuid";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { db } from "./firebase";
import { collection, getDocs, addDoc, updateDoc, doc,getDoc,deleteDoc } from "firebase/firestore";
import "./components/Main.css";

const Home = ({ isAuth }) => {
    const [notes, setNotes] = useState([]);
    const notesCollectionRef = collection(db, "notes");
    const [activeNote, setActiveNote] = useState(false);
    const navigate = useNavigate();
    const [newNote, setNewNote] = useState([]);

    useEffect(() => {
        const getNotes = async () => {
            const data = await getDocs(notesCollectionRef);
            setNotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getNotes();
    }, [notes]);

    // useEffect(() => {
    //   //ローカルストレージにノートを保存する
    //   localStorage.setItem("notes", JSON.stringify(notes));
    // }, [notes]);

    useEffect(() => {
        if (!isAuth) {
            navigate("./login");
        }
    }, []);

    useEffect(() => {
        getActiveNote();
    }, [activeNote]);

    useEffect(() => {
        getActiveNote();
    }, [newNote]);

    const onDeleteNote = async (id) => {
        await deleteDoc(doc(db, "notes", id));
        // const filterNotes = notes.filter((note) => note.id !== id);
        // setNotes(filterNotes);
    }

    const getActiveNote = async () => {
        // return notes.find((note) => note.id === activeNote);
        if (!activeNote) {
            return
        } 
        const postRef = collection(db, 'notes');

        const note = await getDoc(doc(postRef, activeNote));
        if (note.exists()) {
            const noteData = note.data();
            setNewNote(noteData);
        }
    }

    const onAddNote = async () => {
        const newNote = await addDoc(notesCollectionRef, {
            uuid: uuid(),
            title: "無題",
            content: "新しいノートの内容",
            modDate: Date.now(),
            userId: auth.currentUser.uid,
        })

        setNotes([...notes, newNote]);
    };

    const onUpdateNote = async (key, value) => {
        const noteDoc = doc(db, "notes", activeNote);
        const newFields = {
            [key]: value,
            modDate: Date.now(),
        };
        await updateDoc(noteDoc, newFields);

        const changeNote = notes.map((note) => {
                if (note.id === activeNote) {
                    return {
                        [key]: value,
                        modDate: Date.now(),
                    };
                } else {
                  return note;
                }
        });
        setNewNote(changeNote);
    };

    return (
        <div className="App home">
            <Sidebar onAddNote={onAddNote} notes={notes} onDeleteNote={onDeleteNote} activeNote={activeNote} setActiveNote={setActiveNote} />
            {/* <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} /> */}


            {!activeNote ? (
                <div className="no-active-note">ノートが選択されていません</div>
            ) : (
                <div className="app-main">
                    <div className="app-main-note-edit">
                        <input id="title" type="text" value={newNote.title} onChange={(e) => { onUpdateNote("title", e.target.value) }}></input>
                        <textarea id="content" placeholder="ノート内容を記入" value={newNote.content} onChange={(e) => { onUpdateNote("content", e.target.value) }}></textarea>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Home