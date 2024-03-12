import { useEffect, useState } from 'react'
import { Card } from './card.tsx'

type Props = {
	search: string
}

export type Character = {
	id: string
	name: string
	alternate_names: string[]
	species: string
	gender: string
	house: string
	dateOfBirth: string
	yearOfBirth: number
	wizard: boolean
	ancestry: string
	eyeColour: string
	hairColour: string
	wand: {
		wood: string
		core: string
		length: number
	}
	patronus: string
	hogwartsStudent: boolean
	hogwartsStaff: boolean
	actor: string
	alternate_actors: string[]
	alive: boolean
	image: string
}

export const Section = (props: Props) => {
	const [characters, setCharacters] = useState<Character[]>([])

	useEffect((): void => {
		getData()
	}, [])

	const getData = async () => {
		try {
			const result: Response = await fetch('https://hp-api.onrender.com/api/characters')
			const data = await result.json()
			setCharacters(data)
		} catch (error) {
			console.log(error)
		}
	}

	const filteredCharacters: Character[] = characters.filter((character: Character) =>
		character.name.toLowerCase().includes(props.search.toLowerCase())
	)

	return (
		<div>
			{filteredCharacters.map((character: Character) => {
				return (
					<Card
						name={character.name}
						dateOfBirth={character.dateOfBirth}
						gender={character.gender}
						house={character.house}
						image={
							character.image.length === 0
								? 'https://media.printables.com/media/prints/524098/images/4238652_3e7dd9ba-7b7f-4ec9-9d97-d21de1e1dbae/thumbs/inside/1280x960/png/wizard.webp'
								: character.image
						}
					/>
				)
			})}
		</div>
	)
}
