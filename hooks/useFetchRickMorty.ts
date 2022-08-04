import React, { useEffect, useState } from 'react'
import { Character } from '../types'
import axios from 'axios'

export function useFetchRickMorty(page: number) {
	const [characters, setCharacters] = useState<Character[]>([])

	const fetchCharacters = async () => {
		const res = await axios.get(
			`https://rickandmortyapi.com/api/character/?page=${page}`,
		)

		setCharacters(res.data.results)
	}

	useEffect(() => {
		fetchCharacters()
	}, [page])

	return characters
}
