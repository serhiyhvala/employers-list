import { Component } from 'react'

import './Info.css'

class Info extends Component {
	render() {
		const { totalEmployers, totalReward } = this.props
		return (
			<div className='info'>
				<h1>Accounting of employees in the company</h1>
				<h2>
					Total number of employers:{' '}
					{totalEmployers === 0 ? 'None' : totalEmployers}
				</h2>
				<h2>
					The award will be received: {totalReward === 0 ? 'None' : totalReward}
				</h2>
			</div>
		)
	}
}

export default Info
