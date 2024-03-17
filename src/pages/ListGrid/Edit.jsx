import React, { useState } from 'react';
import './edit.css';
export default function Edit({ user, onSave }) {
	const [editedUser, setEditedUser] = useState({ ...user });

	const handleChange = (e) => {
		const { name, value } = e.target;
		setEditedUser((prevUser) => ({
			...prevUser,
			[name]: value,
		}));
	};

	const handleSave = () => {
		onSave(editedUser);
	};

	return (
		<div className="user">
			<p>
				User Name:{' '}
				<input
					className="input"
					type="text"
					name="name"
					value={editedUser.name}
					onChange={handleChange}
				/>
			</p>
			<p>
				Phone number:{' '}
				<input
					className="input"
					type="text"
					name="phoneNumber"
					value={editedUser.phoneNumber}
					onChange={handleChange}
				/>
			</p>
			<p>Added: {editedUser.createAt}</p>
			<p>Favorite: {editedUser.isFavorites}</p>
			<p>
				Note:{' '}
				<input
					className="input"
					type="text"
					name="note"
					value={editedUser.note}
					onChange={handleChange}
				/>
			</p>
			<div className="btns">
				<button className="save" onClick={handleSave}>
					Save
				</button>
			</div>
		</div>
	);
}
