import { useState } from 'react';

import { Typography, Button } from "@mui/material";
import { KeyboardArrowRight } from '@mui/icons-material'


function Introduced (props) {
	
	const [more, setMore] = useState(false)
	
	return (
		<>
			<Typography variant="subtitle2" gutterBottom>
				{
					more ? (props.introduced) : (props.introduced.slice(0, 1000) + '...')
				}
			</Typography>
			<Button color={'secondary'} endIcon={<KeyboardArrowRight />} onClick={ () => setMore(prevState => !prevState)} >
				{
					more ? 'Less' : 'More'
				}
			</Button>
		</>
	)
}

export default Introduced