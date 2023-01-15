import { Component } from 'react'

import './Search.css'

class Search extends Component {
	render() {
		const { handleSearch, search } = this.props
		return (
			<input
				onChange={handleSearch}
				value={search}
				type='text'
				className='form-control search0input'
				placeholder='Search employer'
			/>
		)
	}
}

export default Search
