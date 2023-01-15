import { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'

import './App.css'
import AddEmployerForm from './components/AddEmployerForm/AddEmployerForm'
import EmployersList from './components/EmployersList/EmployersList'
import Filter from './components/Filter/Filter'
import Info from './components/Info/Info'
import Search from './components/Search/Search'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			employerObj: [
				{
					id: uuidv4(),
					name: 'Arthur',
					salary: '1002$',
					increase: false,
					rise: false
				},
				{
					id: uuidv4(),
					name: 'Katya',
					salary: '1001$',
					increase: false,
					rise: false
				},
				{
					id: uuidv4(),
					name: 'Sergiy',
					salary: '1000$',
					increase: false,
					rise: false
				}
			],
			name: '',
			salary: '',
			search: '',
			filter: 'all'
		}
	}

	handleDelete = id => {
		this.setState(({ employerObj }) => ({
			employerObj: [...employerObj].filter(task => task.id !== id)
		}))
	}
	onChangeValue = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onSubmitForm = e => {
		e.preventDefault()
		const task = {
			id: uuidv4(),
			name: this.state.name,
			salary: this.state.salary + '$',
			increase: false,
			rise: false
		}
		this.setState(({ employerObj, name, salary }) => {
			if (name && salary) {
				return {
					employerObj: [...employerObj, task],
					name: '',
					salary: ''
				}
			}
		})
	}

	onToggleProp = (id, prop) => {
		this.setState(({ employerObj }) => ({
			employerObj: employerObj.map(item => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] }
				}
				return item
			})
		}))
	}

	handleSearch = e => {
		this.setState(({ search }) => ({
			search: e.target.value
		}))
	}

	filterObject = (item, arg) => {
		switch (arg) {
			case 'rise': {
				return item.filter(item => item.rise)
			}
			case 'salary': {
				return item.filter(item => item.salary > '1000$')
			}
			default: {
				return item
			}
		}
	}

	setFilter = arg => {
		this.setState(({ filter }) => ({ filter: arg }))
	}

	render() {
		const { employerObj, salary, name, search, filter } = this.state
		const totalReward = employerObj.filter(item => item.increase).length
		const searchObj = employerObj.filter(item =>
			item.name.toLowerCase().includes(search.toLowerCase())
		)
		const filteredObj = this.filterObject(searchObj, filter)
		return (
			<div className='App'>
				<Info totalEmployers={employerObj.length} totalReward={totalReward} />
				<div className='search'>
					<Search handleSearch={this.handleSearch} search={search} />
					<Filter setFilter={this.setFilter} filter={filter} />
				</div>
				<EmployersList
					data={filteredObj}
					handleDelete={this.handleDelete}
					onToggleProp={this.onToggleProp}
				/>
				<AddEmployerForm
					salary={salary}
					name={name}
					onSubmitForm={this.onSubmitForm}
					onChangeValue={this.onChangeValue}
				/>
			</div>
		)
	}
}

export default App
