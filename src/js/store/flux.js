const getState = ({ getStore, setStore }) => {
	return {
		store: {
			listaContactos: [
				{
					fullName: "Maximiliano Schiavina",
					email: "maxisch@hotmail.com",
					phone: "123141241",
					address: "Acebuche 1 , Mijas"
				}
			]
		},
		actions: {
			agregarContacto: (fullName, email, phone, address) => {
				// getStore().listaContactos.concat({fullName, email, phone, address})
				setStore({ listaContactos: getStore().listaContactos.concat({ fullName, email, phone, address }) });
				// console.log("funciona");
				console.log(getStore());
			}
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
