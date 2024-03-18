import React, { useState } from 'react';
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
		<div className="flex items-center justify-between pl-5 border w-[1300px] p-0.5 gap-10 rounded-lg bg-purple-600 text-white relative right-12">
			<p>
				User Name:
				<input
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-56 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					type="text"
					name="name"
					value={editedUser.name}
					onChange={handleChange}
				/>
			</p>
			<p>
				Phone number:
				<input
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-56 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					type="text"
					name="phoneNumber"
					value={editedUser.phoneNumber}
					onChange={handleChange}
				/>
			</p>
			<p>createdAt: {editedUser.createdAt}</p>
			<p>
				Favorite:
				<input
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-56 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					type="text"
					name="isFavorite"
					value={editedUser.isFavorite}
					onChange={handleChange}
				/>
			</p>
			<p>
				Note:
				<input
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-56 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					type="text"
					name="note"
					value={editedUser.note}
					onChange={handleChange}
				/>
			</p>
			<div className="btns">
				<button
					type="button"
					onClick={handleSave}
					class="focus:outline-none mt-3 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
				>
					Save
				</button>
			</div>
		</div>
	);
}
