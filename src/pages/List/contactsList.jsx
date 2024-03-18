import React, { useState, useEffect } from 'react';
import { defaultContacts } from '../../defaultCon';
import Edit from './edit';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function ContactsListGrid() {
	const [users, setUsers] = useState(() => {
		const savedUsers = localStorage.getItem('users');
		return savedUsers ? JSON.parse(savedUsers) : defaultContacts;
	});
	const [editingUserId, setEditingUserId] = useState('');
	const [search, setSearch] = useState('');

	useEffect(() => {
		localStorage.setItem('users', JSON.stringify(users));
	}, [users]);

	const handleDelete = (id) => {
		const newUsers = users.filter((user) => user.id !== id);
		setUsers(newUsers);
		toast.success('Contact successfully deleted 🎁');
	};

	const handleEdit = (userId) => {
		setEditingUserId(userId);
	};

	const handleSave = (editedUser) => {
		const newUsers = users.map((user) => (user.id === editedUser.id ? editedUser : user));
		setUsers(newUsers);
		setEditingUserId('');
	};

	const handleSearch = (e) => {
		setSearch(e.target.value);
	};

	const filteredUsers = users.filter((user) => {
		return (
			user.name.toLowerCase().includes(search.toLowerCase()) || user.phoneNumber.includes(search)
		);
	});

	return (
		<div className="mt-10">
			<div className="flex gap-3  ml-5 ">
				<input
					type="text"
					id="search-navbar"
					onChange={handleSearch}
					className="block w-44 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Search..."
				/>
				<Link
					to="/add"
					className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
					Add Contact
				</Link>
				<Link
					to="/list"
					type="button"
					className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
					Line
				</Link>
				<Link
					to="/grid"
					type="button"
					className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
					Grid
				</Link>
			</div>
			<div className="flex flex-col w-[900px] relative left-[200px] top-11">
				{filteredUsers.map((user) => (
					<div className="main" key={user.id}>
						{editingUserId === user.id ? (
							<Edit user={user} onSave={handleSave} />
						) : (
							<div className="flex items-center justify-between pl-5 border w-[900px] p-0.5 gap-10 rounded-lg bg-purple-600 text-white  ">
								<p>Name: {user.name}</p>
								<p>Phone number: {user.phoneNumber}</p>
								<p>CreatedAt: {user.createAt}</p>
								<p>isFavorite: {user.isFavorites}</p>
								<p>Note: {user.note}</p>
								<div className="flex mt-3">
									<button
										className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
										onClick={() => handleEdit(user.id)}
									>
										Edit
									</button>
									<button
										type="button"
										onClick={() => handleDelete(user.id)}
										class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
									>
										Delete
									</button>
								</div>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
