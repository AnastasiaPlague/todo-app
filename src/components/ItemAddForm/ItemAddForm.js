import React, { Component } from 'react';
import './ItemAddForm.css';

class ItemAddForm extends Component {
 
  render() { 
    return (
			<div className="item-add-form">
				<input type="text" className="form-control item-add-form" />
				<button
					className="btn btn-outline-secondary float-right"
					onClick={() => this.props.onAdded("Hello")}>
					Add Item
				</button>
			</div>
		);
  }
}
 
export default ItemAddForm;