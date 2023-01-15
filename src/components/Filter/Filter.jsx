import { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'

import './Filter.css'

class Filter extends Component {
	render() {
		const buttonsData = [
			{
				id: uuidv4(),
				name: 'all',
				label: 'All employers'
			},
			{
				id: uuidv4(),
				name: 'rise',
				label: 'For promotion'
			},
			{
				id: uuidv4(),
				name: 'salary',
				label: 'Salary over $1000'
			}
		]
		const { setFilter, filter } = this.props
		return (
			<div className='btn-group'>
				{buttonsData.map(item => (
					<button
						key={item.id}
						onClick={() => setFilter(item.name)}
						className={
							filter === item.name ? 'btn btn-light' : 'btn btn-outline-light'
						}
					>
						{item.label}
					</button>
				))}
			</div>
		)
	}
}

export default Filter
