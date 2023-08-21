import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export const EditContact = () => {
	const { store, actions } = useContext(Context);
	const [fullName, setFullName] = useState(store.usuario.fullName);
	const [email, setEmail] = useState(store.usuario.email);
	const [phone, setPhone] = useState(store.usuario.phone);
	const [address, setAddress] = useState(store.usuario.address);
	const [numeroid, setNumeroId] = useState(store.usuario.numeroid);

	function handleSubmit(e) {
		e.preventDefault();
		actions.actualizarContacto(fullName, email, phone, address, numeroid);
		setFullName("");
		setEmail("");
		setPhone("");
		setAddress("");
		// actions.borrarContacto(store.usuario.numeroid);
	}
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit Contact</h1>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							onChange={event => setFullName(event.target.value)}
							value={fullName}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							onChange={event => setEmail(event.target.value)}
							value={email}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							onChange={event => setPhone(event.target.value)}
							value={phone}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							onChange={event => setAddress(event.target.value)}
							value={address}
						/>
					</div>
					<button type="submit" className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
