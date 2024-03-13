type Props = {
	name: string
	gender: string
	house: string
	dateOfBirth: string
	image: string
}
export const Card = (props: Props) => {
	return (
		<div
			style={{
				width: '20vw',
				backgroundColor: 'rgb(25,46,0)',
				padding: '2rem',
				marginTop: '2rem',
				borderRadius: 10
			}}
		>
			<h1>{props.name}</h1>
			<img style={{ width: '10rem', objectFit: 'cover' }} src={props.image} alt="" />
			<h3>{props.gender}</h3>
			<h3>{props.house}</h3>
			<h3>{props.dateOfBirth}</h3>
		</div>
	)
}
