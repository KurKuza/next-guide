export interface GetCharacterResults {
	info: Info
	results: Character[]
}

export interface Character {
	id: number
	name: string
	status: Status
	species: Species
	type: string
	gender: Gender
	origin: Location
	location: Location
	image: string
	episode: string[]
	url: string
	created: Date
}

export interface RootObject {
	info: Info
	results: Result[]
}

export interface Info {
	count: number
	next: string
	pages: number
	prev: null
}

export interface Result {
	created: Date
	episode: string[]
	gender: Gender
	id: number
	image: string
	location: Location
	name: string
	origin: Location
	species: Species
	status: Status
	type: string
	url: string
}

export enum Gender {
	Female = 'Female',
	Male = 'Male',
	Unknown = 'unknown',
}

export interface Location {
	name: string
	url: string
}

export enum Species {
	Alien = 'Alien',
	Human = 'Human',
}

export enum Status {
	Alive = 'Alive',
	Dead = 'Dead',
	Unknown = 'unknown',
}
