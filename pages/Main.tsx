import Masonry from '@mui/lab/Masonry'
import {
	Container,
	LinearProgress,
	Pagination,
	Paper,
	Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import React, { FC, useEffect, useState } from 'react'
import { useFetchRickMorty } from '../hooks/useFetchRickMorty'
import { Character, GetCharacterResults } from '../types'

const MAX_ROW_LENGTH = 500

function sleep(duration: number) {
	return new Promise<void>((resolve) => {
		setTimeout(() => {
			resolve()
		}, duration)
	})
}

function Main() {
	const [page, setPage] = React.useState(1)
	const characters = useFetchRickMorty(page)

	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value)
	}

	const [loading, setLoading] = React.useState(false)
	const [loadedRows, setLoadedRows] = React.useState<any>([])
	const mounted = React.useRef(true)
	// const { data } = useDemoData({
	// 	dataSet: 'Commodity',
	// 	rowLength: 20,
	// 	maxColumns: 6,
	// })

	const loadServerRows = async (newRowLength: number) => {
		setLoading(true)
		const newData = await getRealGridData(newRowLength, getCommodityColumns())
		// Simulate network throttle
		await sleep(Math.random() * 500 + 100)

		if (mounted.current) {
			setLoading(false)
			setLoadedRows(loadedRows.concat(newData.rows))
		}
	}

	const handleOnRowsScrollEnd = (params) => {
		if (loadedRows.length <= MAX_ROW_LENGTH) {
			loadServerRows(params.viewportPageSize)
		}
	}

	React.useEffect(() => {
		return () => {
			mounted.current = false
		}
	}, [])

	// return (
	// 	<div style={{ height: 400, width: '100%' }}>
	// 		{/* <div
	// 			{...data}
	// 			rows={data.rows.concat(loadedRows)}
	// 			loading={loading}
	// 			hideFooterPagination
	// 			onRowsScrollEnd={handleOnRowsScrollEnd}
	// 			components={{
	// 				LoadingOverlay: LinearProgress,
	// 			}}
	// 		/> */}
	// 	</div>
	// )

	return (
		<Container maxWidth='xl'>
			<Pagination
				count={42}
				variant='outlined'
				color='primary'
				onChange={handleChange}
				sx={{ p: 2 }}
			/>

			<Masonry columns={5} spacing={1}>
				{characters.map((character, index) => (
					<Paper key={index} style={{ overflow: 'hidden' }}>
						<Box
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								gap: '5px',
							}}
							sx={{ px: 1, py: 1 }}>
							<Typography variant='h6'>{character.name}</Typography>
							<Typography>{character.status}</Typography>
						</Box>
						<img
							src={character.image}
							style={{
								borderBottomLeftRadius: 4,
								borderBottomRightRadius: 4,
							}}
						/>
					</Paper>
				))}
			</Masonry>
		</Container>
	)
}

export default Main
