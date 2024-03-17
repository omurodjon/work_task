import React from 'react';
import { defaultContacts } from '../../defaultCon';
import './main.css';

export default function ContactsList() {
	const contacts = [...defaultContacts];
	console.log(contacts);
	return (
		<div>
			<div className="header">
				<input type="text" />
			</div>
			<div className="menu">
				<p>Name</p>
				<p>Phone Number </p>
				<p> Added </p>
				<p>Favorite</p>
				<p>Note</p>
			</div>
			<div className="list">
				{/* Names */}
				<div>
					{contacts.map((item) => (
						<p className="name" key={item.id}>
							{item.name}
						</p>
					))}
				</div>
				{/* Phone Numbers  */}
				<div>
					{contacts.map((item) => (
						<p className="phone" key={item.id}>
							{item.phoneNumber}
						</p>
					))}
				</div>
				{/* CreateAt  */}
				<div>
					{contacts.map((item) => (
						<p className="create-At" key={item.id}>
							{item.createAt}
						</p>
					))}
				</div>
				{/*  isFavorite */}
				<div>
					{contacts.map((item) => (
						<p className="favorite" key={item.id}>
							{item.isFavorites}
						</p>
					))}
				</div>
				{/* { Notes} */}
				<div>
					{contacts.map((item) => (
						<p className="note" key={item.id}>
							{item.note}
						</p>
					))}
				</div>
			</div>
		</div>
	);
}
// {item.phoneNumber} {item.createAt}
// 						{item.isFavorites} {item.note}
