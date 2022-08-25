import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Introduced from './Introduced/Introduced'
import Specifications from './Specifications/Specifications'
import Comments from './Comments/Comments'

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;
	
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

export default function BasicTabs() {
	const [value, setValue] = React.useState(0);
	
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};
	
	return (
		<Box className='mt-5' sx={{ width: '100%' }}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
					<Tab label="Introduced" {...a11yProps(0)} />
					<Tab label="Specifications" {...a11yProps(1)} />
					<Tab label="Comments" {...a11yProps(2)} />
					<Tab label="Questions" {...a11yProps(3)} />
				</Tabs>
			</Box>
			<TabPanel value={value} index={0}>
				<Introduced introduced='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, eveniet, quos? Aut deserunt dicta, eaque eius illo impedit nulla. Eligendi libero, quos! At consequatur earum eligendi magnam veritatis. Dolores, temporibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, eveniet, quos? Aut deserunt dicta, eaque eius illo impedit nulla. Eligendi libero, quos! At consequatur earum eligendi magnam veritatis. Dolores, temporibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, eveniet, quos? Aut deserunt dicta, eaque eius illo impedit nulla. Eligendi libero, quos! At consequatur earum eligendi magnam veritatis. Dolores, temporibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, eveniet, quos? Aut deserunt dicta, eaque eius illo impedit nulla. Eligendi libero, quos! At consequatur earum eligendi magnam veritatis. Dolores, temporibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, eveniet, quos? Aut deserunt dicta, eaque eius illo impedit nulla. Eligendi libero, quos! At consequatur earum eligendi magnam veritatis. Dolores, temporibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, eveniet, quos? Aut deserunt dicta, eaque eius illo impedit nulla. Eligendi libero, quos! At consequatur earum eligendi magnam veritatis. Dolores, temporibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, eveniet, quos? Aut deserunt dicta, eaque eius illo impedit nulla. Eligendi libero, quos! At consequatur earum eligendi magnam veritatis. Dolores, temporibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, eveniet, quos? Aut deserunt dicta, eaque eius illo impedit nulla. Eligendi libero, quos! At consequatur earum eligendi magnam veritatis. Dolores, temporibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, eveniet, quos? Aut deserunt dicta, eaque eius illo impedit nulla. Eligendi libero, quos! At consequatur earum eligendi magnam veritatis. Dolores, temporibus.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, eveniet, quos? Aut deserunt dicta, eaque eius illo impedit nulla. Eligendi libero, quos! At consequatur earum eligendi magnam veritatis. Dolores, temporibus.' />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Specifications
					specifications={ [
						{ title: 'Size', value: '27 CH' },
						{ title: 'Weight', value: '500 MG' },
						{ title: 'Monitor type', value: 'LED' },
					] } />
			</TabPanel>
			<TabPanel value={value} index={2}>
				<Comments product={ {
					title: 'MIS Monitor',
					comments: [
						{
							id: 1,
							rate: 3,
							owner: 'Phorez',
							title: 'Good',
							positivePoints: [],
							negativePoints: [],
							description: 'Lorem ipsum dolor sit amet, consectetur adipis',
							isAnonymous: false,
							date: '2022 / 10 / 8',
						},
						{
							id: 2,
							rate: 5,
							owner: 'Phorez B',
							title: 'Good',
							positivePoints: [],
							negativePoints: [],
							description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur debitis dicta distinctio ea et ex ipsa iste laborum minima, nesciunt, nihil officia perferendis, quo sit tempora tempore tenetur ullam?',
							isAnonymous: false,
							date: '2022 / 10 / 8',
						},
						{
							id: 3,
							rate: 1,
							owner: 'Phorez B',
							title: 'Good',
							positivePoints: [],
							negativePoints: [],
							description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur debitis dicta distinctio ea et ex ipsa iste laborum minima, nesciunt, nihil officia perferendis, quo sit tempora tempore tenetur ullam?',
							isAnonymous: false,
							date: '2022 / 10 / 8',
						},
						{
							id: 4,
							rate: 2,
							owner: 'Phorez B',
							title: 'Good',
							positivePoints: [],
							negativePoints: [],
							description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur debitis dicta distinctio ea et ex ipsa iste laborum minima, nesciunt, nihil officia perferendis, quo sit tempora tempore tenetur ullam?',
							isAnonymous: false,
							date: '2022 / 10 / 8',
						},
						{
							id: 5,
							rate: 4,
							owner: 'Phorez B',
							title: 'Good',
							positivePoints: [],
							negativePoints: [],
							description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur debitis dicta distinctio ea et ex ipsa iste laborum minima, nesciunt, nihil officia perferendis, quo sit tempora tempore tenetur ullam?',
							isAnonymous: false,
							date: '2022 / 10 / 8',
						},
					],
				} } />
			</TabPanel>
			<TabPanel value={value} index={3}>
				Item four
			</TabPanel>
		</Box>
	);
}
