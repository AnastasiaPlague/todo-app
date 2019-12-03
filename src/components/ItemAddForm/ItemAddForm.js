import React, { Component } from "react";
import "./ItemAddForm.css";

class ItemAddForm extends Component {
	state = {
		label: ""
	};

	onLabelChange = e => {
		this.setState({
			label: e.target.value
		});
	};
	onSubmit = e => {
		e.preventDefault();
		this.props.onAdded(this.state.label);
		this.setState({
			label: ""
		});
	};

	render() {
		return (
			<form className="item-add-form d-flex" onSubmit={this.onSubmit}>
				<input
					type="text"
					className="form-control"
					placeholder="input your todo"
					value={this.state.label}
					onChange={this.onLabelChange}
				/>
				<button className="btn btn-outline-secondary">Add</button>
			</form>
		);
	}
}

export default ItemAddForm;
