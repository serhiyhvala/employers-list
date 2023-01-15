import { Component } from 'react'

import Employer from '../Employer/Employer'

import './EmployerList.css'

class EmployersList extends Component {
	render() {
		const { data, handleDelete, onToggleProp } = this.props
		return (
			<ul className='list list-group'>
				{data.map(item => (
					<Employer
						{...item}
						key={item.id}
						handleDelete={() => handleDelete(item.id)}
						onToggleProp={e =>
							onToggleProp(item.id, e.currentTarget.getAttribute('data-toggle'))
						}
					/>
				))}
			</ul>
		)
	}
}

export default EmployersList
