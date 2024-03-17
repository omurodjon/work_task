// import React, { useState } from 'react';
// import './main.css';
// import { Link } from 'react-router-dom';

// function CreateContact({ contacts, setContacts }) {
// 	const [name, setName] = useState('');
// 	const [phoneNumber, setPhoneNumber] = useState('');
// 	const [isFavorite, setIsFavorite] = useState('');
// 	const [note, setNote] = useState('');
// 	const [createdAt, setCreatedAt] = useState('');

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		const newContact = {
// 			name: name,
// 			phoneNumber: phoneNumber,
// 			isFavorite: isFavorite,
// 			note: note,
// 			createdAt: createdAt,
// 		};
// 		setContacts([...contacts, newContact]);
// 		localStorage.setItem('contacts', JSON.stringify([...contacts, newContact]));
// 		console.log('New User:', newContact);
// 		setName('');
// 		setPhoneNumber('');
// 		setIsFavorite('');
// 		setNote('');
// 		setCreatedAt('');
// 	};

// 	return (
// 		<form className="form" onSubmit={handleSubmit}>
// 			<label>
// 				Name:
// 				<input className='inputs'
// 					className="input className='inputs's"
// 					type="text"
// 					value={name}
// 					onChange={(e) => setName(e.target.value)}
// 				/>
// 			</label>
// 			<label>
// 				Phone Number:
// 				<input className='inputs'
// 					className="input className='inputs's"
// 					type="number"
// 					value={phoneNumber}
// 					onChange={(e) => setPhoneNumber(e.target.value)}
// 				/>
// 			</label>
// 			<label>
// 				Is Favorite:
// 				<input className='inputs'
// 					className="input className='inputs's"
// 					type="checkbox"
// 					checked={isFavorite}
// 					onChange={(e) => setIsFavorite(e.target.checked)}
// 				/>
// 			</label>
// 			<label>
// 				Note:
// 				<input className='inputs' className="input className='inputs's" onChange={(e) => setNote(e.target.value)} />
// 			</label>
// 			<label>
// 				Created At:
// 				<input className='inputs'
// 					className="input className='inputs's"
// 					type="text"
// 					value={createdAt}
// 					onChange={(e) => setCreatedAt(e.target.value)}
// 				/>
// 			</label>
// 			<button className="add" type="submit">
// 				Add User
// 			</button>
// 		</form>
// 	);
// }

// export default CreateContact;
import React, { useState } from 'react';
import './main.css';
import { Link } from 'react-router-dom';

function CreateContact() {
	const [name, setName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [isFavorite, setIsFavorite] = useState('');
	const [note, setNote] = useState('');
	const [createdAt, setCreatedAt] = useState('');

	const generateRandomNumbers = (count) => {
		const numbers = [];
		for (let i = 0; i < count; i++) {
			const randomNumber = Math.floor(Math.random() * 999);
			numbers.push(randomNumber);
		}
		return numbers;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newContact = {
			id: generateRandomNumbers(),
			name: name,
			phoneNumber: phoneNumber,
			createdAt: createdAt,
			isFavorite: isFavorite,
			note: note,
		};
		console.log('New Contact:', newContact);
		const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
		localStorage.setItem('users', JSON.stringify([...existingUsers, newContact]));
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<label>
				Name:
				<input
					className="inputs"
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
			</label>
			<label>
				Phone Number:
				<input
					className="inputs"
					type="tel"
					value={phoneNumber}
					onChange={(e) => setPhoneNumber(e.target.value)}
					required
				/>
			</label>
			<label>
				Is Favorite:
				<input
					className="inputs"
					type="text"
					checked={isFavorite}
					onChange={(e) => setIsFavorite(e.target.checked)}
					required
				/>
			</label>
			<label>
				Note:
				<input className="inputs" value={note} onChange={(e) => setNote(e.target.value)} required />
			</label>
			<label>
				Created At:
				<input
					className="inputs"
					type="text"
					value={createdAt}
					onChange={(e) => setCreatedAt(e.target.value)}
					required
				/>
			</label>
			<button className="add" type="submit">
				Add contact
			</button>
			<Link className="add" to="/list">
				Go home
			</Link>
		</form>
	);
}

export default CreateContact;
