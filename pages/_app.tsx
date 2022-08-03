import { GetStaticProps } from 'next'
import '../styles/globals.css'
import { GetCharacterResults } from '../types'
import Main from './Main'

function MyApp() {
	return (
		<>
		<Main />
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch('https://rickandmortyapi.com/api/character')
	const { results }: GetCharacterResults = await res.json()

	const characters = {
		props: { characters: results },
	}

	return characters
}
export default MyApp
