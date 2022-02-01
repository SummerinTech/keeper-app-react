import React, { useState } from "react";

const CreateArea = ({ onAdd }) => {
	const [isReady, setIsReady] = useState(false);
	const [inputValue, setInputValue] = useState({ title: "", content: "" });
	const useCreateArea = () => {
		setIsReady(true);
	};

	const handleInput = (e) => {
		const { name, value } = e.target;
		setInputValue((prevValue) => {
			return {
				...prevValue,
				[name]: value,
			};
		});
		console.log(inputValue);
	};

	const handleClick = (e) => {
		e.preventDefault();
		onAdd(inputValue);
		setInputValue("");
	};

	return (
		<div className="CreateArea">
			<form className="create-form">
				{isReady && (
					<input
						onChange={handleInput}
						name="title"
						type="text"
						placeholder="Title"
						value={inputValue.title}
					/>
				)}
				<textarea
					onChange={handleInput}
					onClick={useCreateArea}
					name="content"
					rows={isReady ? "3" : "1"}
					placeholder="Take a note..."
					value={inputValue.content}
				/>
				<button onClick={handleClick}>+</button>
			</form>
		</div>
	);
};

export default CreateArea;
