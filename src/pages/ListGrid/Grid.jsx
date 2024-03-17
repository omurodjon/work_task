import React, { useState, useEffect } from 'react';
import { defaultContacts } from '../../defaultCon';
import Edit from './Edit';
import './main.css';
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
		<div>
			<div className="header">
				<input
					className="search"
					type="text"
					placeholder="Search users"
					value={search}
					onChange={handleSearch}
				/>

				<Link to="/add" className="add-contact">
					Add Contact
				</Link>
			</div>
			<div className="grid">
				{filteredUsers.map((user) => (
					<div className="main" key={user.id}>
						{editingUserId === user.id ? (
							<Edit user={user} onSave={handleSave} />
						) : (
							<div className="user">
								<p>User Name: {user.name}</p>
								<p>Phone number: {user.phoneNumber}</p>
								<p>Added: {user.createAt}</p>
								<p>Favorite: {user.isFavorites}</p>
								<p>Note: {user.note}</p>
								<div className="btns">
									<button className="edit" onClick={() => handleEdit(user.id)}>
										Edit
									</button>
									<button className="delete" onClick={() => handleDelete(user.id)}>
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
