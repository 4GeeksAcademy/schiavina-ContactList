const getState = ({ getStore, setStore }) => {
	return {
		store: {
			listaContactos: []
		},
		actions: {
			agregarContacto: (fullName, email, phone, address) => {
				setStore({ listaContactos: getStore().listaContactos.concat({ fullName, email, phone, address }) });
				console.log(getStore());
			},

			borrarContacto: nombre => {
				const store = getStore();
				const nuevaLista = store.listaContactos.filter(item => item.fullName !== nombre);
				setStore({ listaContactos: nuevaLista });
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
