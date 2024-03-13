import './assets/styles/App.css'
import { Section } from './components/Section.tsx'
import React, { useState } from 'react'

const App = () => {
	const [search, setSearch] = useState('')
	const [house, setHouse] = useState('All')

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value)
	}

	const handleHouse = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setHouse(event.target.value)
	}

	return (
		<>
			<select onChange={handleHouse}>
				<option value={'All'}>All houses</option>
				<option value={'Gryffindor'}>Gryffindor</option>
				<option value={'Slytherin'}>Slytherin</option>
				<option value={'Hufflepuff'}>Hufflepuff</option>
				<option value={'Ravenclaw'}>Ravenclaw</option>
			</select>
			<input type={'text'} onChange={handleSearch} />
			<Section search={search} house={house}></Section>
		</>
	)
}

export default App
