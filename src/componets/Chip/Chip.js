import './Chip.css'

function Chip (props) {
	return (
		<div className={`chip user-select-none ${ props.label.toLowerCase() }`}>
			<p className='mb-0'>{ props.label }</p>
		</div>
	)
}

export default Chip