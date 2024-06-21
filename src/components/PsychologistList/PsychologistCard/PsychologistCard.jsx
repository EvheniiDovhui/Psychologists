// src/components/PsychologistCard.js
import React from 'react'
import PropTypes from 'prop-types'

const PsychologistCard = ({ psychologist, onFavoriteToggle }) => {
	const {
		name,
		avatar_url,
		experience,
		reviews,
		price_per_hour,
		rating,
		license,
		specialization,
		initial_consultation,
		about,
	} = psychologist

	return (
		<div className='psychologist-card'>
			<img src={avatar_url} alt={name} />
			<h3>{name}</h3>
			<p>{specialization}</p>
			<p>Experience: {experience}</p>
			<p>Rating: {rating}</p>
			<button onClick={onFavoriteToggle}>❤️</button>
			<button>Read more</button>
			<button>Make an appointment</button>
		</div>
	)
}

PsychologistCard.propTypes = {
	psychologist: PropTypes.object.isRequired,
	onFavoriteToggle: PropTypes.func.isRequired,
}

export default PsychologistCard
