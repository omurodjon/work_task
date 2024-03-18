import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

function CreateContact() {
	const [name, setName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [isFavorite, setIsFavorite] = useState('');
	const [note, setNote] = useState('');
	const [createdAt, setCreatedAt] = useState('');

	const generateRandomNumber = () => {
		return Math.floor(Math.random() * 100); // Generates a random number between 0 and 99
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newContact = {
			id: generateRandomNumber(),
			name: name,
			phoneNumber: phoneNumber,
			createdAt: createdAt,
			isFavorite: isFavorite,
			note: note,
		};
		console.log('New Contact:', newContact);
		const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
		localStorage.setItem('users', JSON.stringify([...existingUsers, newContact]));
		toast.success('Successfully added contact');
	};

	return (
		<form
			className="form w-[270px] flex items-center justify-center flex-col h-[370px] ml-[38%] mt-24 border p-2"
			onSubmit={handleSubmit}
		>
			<label>
				Name
				<input
					type="text"
					id="first_name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-56 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Name"
					required
				/>
			</label>
			<label>
				Phone Number:
				<input
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-56 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					type="number"
					value={phoneNumber}
					onChange={(e) => setPhoneNumber(e.target.value)}
					placeholder="Phone Number"
					required
				/>
			</label>
			{/* <label>
				Is Favorite:
				<input
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-56 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					type="text"
					placeholder="Yes/No"
					checked={isFavorite}
					onChange={(e) => setIsFavorite(e.target.checked)}
					required
				/>
			</label> */}
			<label>
				CreatedAt:
				<input
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-56 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					value={createdAt}
					onChange={(e) => setCreatedAt(e.target.value)}
					placeholder="CreatedAt"
					required
				/>
			</label>
			<label>
				Note:
				<input
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-56 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					value={note}
					onChange={(e) => setNote(e.target.value)}
					placeholder="Note"
					required
				/>
			</label>

			<div className="flex">
				<button
					className="focus:outline-none mt-3 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
					type="submit"
				>
					Add contact
				</button>
				<Link
					className="text-white  mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
					to="/list"
				>
					Go home
				</Link>
			</div>
		</form>
	);
}

export default CreateContact;
