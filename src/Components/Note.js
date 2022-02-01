import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

const Note = (props) => {
	return (
		<div className="Note">
			<h1>{props.title}</h1>
			<p>{props.content}</p>
			<button>
				<DeleteIcon />
			</button>
		</div>
	);
};

export default Note;
