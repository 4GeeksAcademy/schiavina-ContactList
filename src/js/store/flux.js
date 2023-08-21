const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			listaContactos: [],
			usuario: {}
		},
		actions: {
			agregarContacto: (fullName, email, phone, address) => {
				fetch("https://playground.4geeks.com/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify({
						address: address,
						agenda_slug: "maxischiavina",
						email: email,
						full_name: fullName,
						phone: phone
					}),
					headers: { "Content-type": "application/json" }
				})
					.then(response => response.json())
					.then(json => console.log(json))
					.catch(err => console.log(err));
			},

			borrarContacto: numeroid => {
				fetch("https://playground.4geeks.com/apis/fake/contact/" + numeroid, { method: "DELETE" })
					.then(response => response.json())
					.then(data => {
						if (data.msg == "ok") {
							getActions().obtenerContactos();
						}
					})
					.catch(err => console.log(err));
			},

			obtenerContactos: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/maxischiavina")
					.then(response => response.json())
					.then(data => setStore({ listaContactos: data }))
					.catch(err => console.log(err));
			},

			actualizarContacto: (fullName, email, phone, address, numeroid) => {
				fetch("https://playground.4geeks.com/apis/fake/contact/" + numeroid, {
					method: "PUT",
					body: JSON.stringify({
						full_name: fullName,
						email: email,
						agenda_slug: "maxischiavina",
						address: address,
						phone: phone
					}),
					headers: { "Content-type": "application/json" }
				})
					.then(response => response.json())
					.then(json => console.log(json))
					.catch(err => console.log(err));
			},

			editarperfil: data => {
				console.log(data);
				setStore({ usuario: data });
			}
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
