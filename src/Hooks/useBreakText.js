import { useState } from 'react';
import { Button, Typography } from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";

function useBreakText (text) {
	const [more, setMore] = useState(false)
	const [isSmall] = useState(() => {
		return text[1000] === undefined;
	})
	
	const resultText = (
		<Typography variant="subtitle2" gutterBottom>
			{
				more || isSmall ? (text) : (text.slice(0, 1000) + '...')
			}
		</Typography>
	)
	
	const button = (
		<>
			{
				!isSmall &&
				<Button color={'secondary'} endIcon={<KeyboardArrowRight />} onClick={ () => setMore(prevState => !prevState)} >
					{
						more ? 'Less' : 'More'
					}
				</Button>
			}
		</>
	)
	
	return [resultText, button]
}

export default useBreakText