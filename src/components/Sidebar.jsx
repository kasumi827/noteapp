import React from 'react';
import "./Sidebar.css";
import { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Sidebar = ({onAddNote, notes, onDeleteNote, activeNote, setActiveNote }) => {
    const sortedNotes = notes.sort((a, b) => b.modDate - a.modDate);
    const ref = useRef();
    const [searchNote, setSearchNote] = useState([]);
    const note = (searchNote.length === 0) ? sortedNotes : searchNote;

    useEffect(() => {
        // setActiveNote(notes[0].id);
    }, []);

    const handleSearch = () => {
        console.log(ref.current.value);

        setSearchNote(
            sortedNotes.filter((note) => note.title.toLowerCase().includes(ref.current.value))
        );
      };

  return (
    <div className="app-sidebar">
          <div className="app-sidebar-header">
          <input className="search" placeholder="検索" type="text" ref={ref} onChange={() => handleSearch()}  ></input>
              <button onClick={onAddNote}>＋</button>
          </div>
          <div className="app-sidebar-notes">
              
              {note.map((note) => (                 
                  <div className={`app-sidebar-note ${note.id === activeNote && "active"} `} key={note.id} onClick={() => setActiveNote(note.id)}>
                  <div className="sidebar-note-title">
                          <strong>{note.title}</strong>
                      <button onClick={() => onDeleteNote(note.id)}><FontAwesomeIcon icon={faTrash} /></button>
                  </div>
                      <p>{note.content}</p>
                      <small>{new Date(note.modDate).toLocaleDateString("js-JP", { hour: "2-digit", minute: "2-digit" })}</small>
              </div>
              ))}
              
          </div>
    </div>
  )
}

export default Sidebar;