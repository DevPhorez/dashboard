import { useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import { Box } from '@mui/material';
import { Item } from '../../Pages/Home/Home';

const data = [
	{ name: 'Jan', sale: 112000 },
	{ name: 'Feb', sale: 99000 },
	{ name: 'Mar', sale: 12090 },
	{ name: 'Apr', sale: 99000 },
	{ name: 'May', sale: 54000 },
	{ name: 'Jun', sale: 85000 },
	{ name: 'Jul', sale: 34000 },
	{ name: 'Agu', sale: 18598 },
	{ name: 'Sep', sale: 0 },
	{ name: 'Oct', sale: 73078 },
	{ name: 'Nov', sale: 12900 },
	{ name: 'Dec', sale: 97000 },
];

function Chart () {
	
	let [width, setWidth] = useState(document.body.offsetWidth - 416)
	
	window.addEventListener('resize', () => {
		setWidth(document.body.offsetWidth - 416)
	})
	
	return (
		<>
			<Box
				sx={{
					p: 2,
					bgcolor: 'background.default',
					display: 'block',
					width: '100%',
					paddingLeft: 0
				}}
			>
				<Item className='m-auto' elevation={6}>
					<LineChart width={width} height={250} data={data} margin={ { top: 5, right: 5, bottom: 5, left: 5 } }>
						<Line type="monotone" dataKey="sale" stroke="#51bfa0" />
						<CartesianGrid stroke="#ccc" strokeDasharray="9 9" />
						<XAxis strokeDasharray="9 9" stroke="#51bfa0" dataKey="name"/>
						<YAxis strokeDasharray="9 9" stroke="#ccc"/>
						<Tooltip />
					</LineChart>
				</Item>
			</Box>
		</>
	)
}

export default Chart