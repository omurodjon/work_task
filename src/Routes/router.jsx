import React from 'react';
import { Routes as Switch, Route, Navigate } from 'react-router-dom';
import { CreateContact, ContactsListGrid, ContactsList } from '../pages';

export default function Routes() {
	return (
		<>
			<Switch>
				<Route path="/grid" exact element={<ContactsListGrid />} />
				<Route path="/list" exact element={<ContactsList />} />
				<Route path="/add" element={<CreateContact />} />
				<Route path="*" element={<Navigate to="/list" />} />
			</Switch>
		</>
	);
}
