import { Component } from 'react'

import './AddEmployerForm.css'

class AddEmployerForm extends Component {
	render() {
		const { name, salary, onChangeValue, onSubmitForm } = this.props
		return (
			<div className='form'>
				<h3>Add new employer</h3>
				<form
					className='add-form d-flex'
					onSubmit={event => onSubmitForm(event)}
				>
					<input
						type='text'
						className='form-control new-post-label'
						placeholder='Name'
						name={'name'}
						onChange={onChangeValue}
						value={name}
					/>
					<input
						type='number'
						className='form-control new-post-label'
						placeholder='Salary'
						name={'salary'}
						onChange={onChangeValue}
						value={salary}
					/>
					<button type='submit' className='btn btn-outline-light'>
						Add
					</button>
				</form>
			</div>
		)
	}
}

export default AddEmployerForm
