import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

export const Modal = props => {
	const [state, setState] = useState({
		//initialize state here
	});
	const { actions } = useContext(Context);
	console.log(props);

	function borrar() {
		actions.borrarContacto(props.id);
		props.onClose();
		actions.obtenerContactos();
	}

	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Are you sure?</h5>
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<div className="modal-body">
						<p>Warning: unknown consequences after this point... Kidding!</p>
					</div>
					<div className="modal-footer">
						<button onClick={() => props.onClose()} type="button" className="btn btn-primary">
							Oh no!
						</button>

						{/* BOTON PARA ELIMINAR AQUI */}
						<button
							type="button"
							className="btn btn-secondary"
							data-dismiss="modal"
							onClick={() => borrar(props.numeroid)}>
							Do it!
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
/**
 * Define the data-types for
 * your component's properties
 **/
Modal.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	numeroid: PropTypes.number,
	id: PropTypes.number
};

/**
 * Define the default values for
 * your component's properties
 **/
Modal.defaultProps = {
	show: false,
	onClose: null
};
