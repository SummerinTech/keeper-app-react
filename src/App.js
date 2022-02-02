import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import CreateArea from "./Components/CreateArea";
import Footer from "./Components/Footer";
import Note from "./Components/Note";

function App() {
	const [notes, setNotes] = useState([]);

	function addNote(inputValue) {
		setNotes((prevNotes) => {
			return [...prevNotes, inputValue];
		});
	}

	function deleteNote(id) {
		setNotes((prevNotes) => {
			return prevNotes.filter((prevNote, index) => {
				return index !== id;
			});
		});
	}

	return (
		<div className="App">
			<Header />
			<CreateArea onAdd={addNote} />
			{notes.map((note, index) => {
				return (
					<Note
						onDelete={deleteNote}
						id={index}
						title={note.title}
						content={note.content}
					/>
				);
			})}

			<Footer />
		</div>
	);
}

export default App;
