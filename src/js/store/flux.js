const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			listaContactos: []
		},
		actions: {
			agregarContacto: (fullName, email, phone, address) => {
				// setStore({ listaContactos: getStore().listaContactos.concat({ fullName, email, phone, address }) });
				// console.log(getStore());

				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify({
						full_name: fullName,
						email: email,
						agenda_slug: "schiavinaAgenda",
						address: address,
						phone: phone
					}),
					headers: { "Content-type": "application/json" }
				})
					.then(response => response.json())
					.then(json => console.log(json))
					.catch(err => console.log(err));
			},

			borrarContacto: id => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, { method: "DELETE" })
					.then(response => response.json())
					.then(data => {
						if (data.msg == "ok") {
							getActions().obtenerContactos();
						}
					})
					.catch(err => console.log(err));
			},

			obtenerContactos: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/schiavinaAgenda")
					.then(response => response.json())
					.then(data => setStore({ listaContactos: data }))
					.catch(err => console.log(err));
			}
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
