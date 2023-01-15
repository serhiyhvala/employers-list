import { Component } from 'react'

import './Employer.css'

class Employer extends Component {
	render() {
		const { salary, name, handleDelete, id, onToggleProp, rise, increase } =
			this.props
		let userClassnames = 'list-group-item d-flex justify-content-between'
		if (increase) userClassnames += ' increase'
		if (rise) userClassnames += ' like'
		return (
			<li className={userClassnames}>
				<span
					className='list-group-item-label'
					onClick={onToggleProp}
					data-toggle='rise'
				>
					{name}
				</span>
				<input
					type='text'
					className='list-group-item-input'
					defaultValue={salary}
					disabled={true}
				/>
				<div className='d-flex justify-content-center align-items-center'>
					<button
						type='button'
						className='btn-cookie btn-sm'
						data-toggle='increase'
						onClick={onToggleProp}
					>
						<i className='fas fa-cookie'></i>
					</button>
					<button
						type='button'
						className='btn-trash btn-sm'
						onClick={() => handleDelete(id)}
					>
						<i className='fas fa-trash'></i>
					</button>
					<i className='fas fa-star'></i>
				</div>
			</li>
		)
	}
}

export default Employer
