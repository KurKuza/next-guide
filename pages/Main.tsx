import Masonry from '@mui/lab/Masonry'
import { Container, Pagination, Typography } from '@mui/material'
import React, { FC, useEffect, useState } from 'react'
import { Character, GetCharacterResults } from '../types'

function Main() {
	const [characters, setCharacters] = useState<Character[]>([])
	const [page, setPage] = React.useState(1)

	useEffect(() => {
		const fetchCharacters = async () => {
			const res = await fetch(
				`https://rickandmortyapi.com/api/character/?page=${page}`,
			)
			const { results }: GetCharacterResults = await res.json()

			setCharacters(results)
		}
		fetchCharacters()
	}, [page])

	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value)
	}

	return (
		<Container maxWidth='xl'>
			<Typography>Page: {page}</Typography>
			<Pagination
				count={10}
				variant='outlined'
				color='primary'
				onChange={handleChange}
			/>

			<Masonry columns={5} spacing={2}>
				{characters.map((character, index) => (
					<div key={index}>
						<Typography>{character.name}</Typography>
						<img
							src={character.image}
							srcSet={`${character.image}?w=162&auto=format&dpr=2 2x`}
							style={{
								borderBottomLeftRadius: 4,
								borderBottomRightRadius: 4,
								width: '277px',
							}}
						/>
					</div>
				))}
			</Masonry>
		</Container>
	)
}

export default Main
