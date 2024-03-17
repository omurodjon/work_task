import React from 'react';
import { Routes as Switch, Route, Navigate } from 'react-router-dom';
import { CreateContact, ContactsListGrid } from '../pages';

export default function Routes() {
	return (
		<>
			<Switch>
				<Route path="/list" element={<ContactsListGrid />} />
				<Route path="/add" exact element={<CreateContact />} />
				<Route path="*" element={<Navigate to="/add" />} />
			</Switch>
		</>
	);
}
