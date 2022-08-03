import React from 'react'
import { getStaticProps } from './_app'

function Main({ characters }: any) {
  console.log('> characters', characters)
	console.log('> getStaticProps', getStaticProps)

	return (
		<div>
			hiiiiiiiiiiiiiiiiiiiiiiiii
			
			{/* {characters.map((character) => {
				return (
					<div key={character.id}>
						{character.name}
						<img src={character.image} />
					</div>
				)
			})} */}
		</div>
	)
}

export default Main
