export const PsychologistCardMain = ({ psychologist }) => {
	return (
		<div className='psychologist-card-main'>
			<h2 className='psychologist-card-main-title'>About</h2>
			<p className='psychologist-card-main-text'>{psychologist.about}</p>
		</div>
	)
}

export default PsychologistCardMain
