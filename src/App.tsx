import './assets/styles/App.css'
import { Section } from './components/Section.tsx'
import React, { useState } from 'react'

const App = () => {
	const [search, setSearch] = useState('')

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value)
	}

	return (
		<>
			<h1>hei</h1>
			<input type={'text'} onChange={handleSearch} />
			<Section search={search} />
		</>
	)
}

export default App
