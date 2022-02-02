import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

const Note = (props) => {
	function deleteNote() {
		props.onDelete(props.id);
	}

	return (
		<div className="Note" key={props.id}>
			<h1>{props.title}</h1>
			<p>{props.content}</p>
			<button onClick={deleteNote}>
				<DeleteIcon />
			</button>
		</div>
	);
};

export default Note;
