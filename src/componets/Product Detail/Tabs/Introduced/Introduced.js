import useBreakText from '../../../../Hooks/useBreakText'


function Introduced (props) {
	const [resultText, button] = useBreakText(props.introduced)
	
	return (
		<>
			{resultText}
			{button}
		</>
	)
}

export default Introduced