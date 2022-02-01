import React, { useState } from "react";

const CreateArea = () => {
	const [isReady, setIsReady] = useState(false);
	const useCreateArea = () => {
		setIsReady(true);
	};
	return (
		<div className="CreateArea">
			<form className="create-form">
				{isReady && <input name="title" type="text" placeholder="Title" />}
				<textarea
					onClick={useCreateArea}
					name="content"
					rows={isReady ? "3" : "1"}
					placeholder="Take a note..."
				/>
				<button>+</button>
			</form>
		</div>
	);
};

export default CreateArea;
