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

function Sections (props) {
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
				<Introduced introduced={ props.product.description } />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Specifications
					specifications={ props.product.features } />
			</TabPanel>
			<TabPanel value={value} index={2}>
				<Comments product={ props.product } />
			</TabPanel>
			<TabPanel value={value} index={3}>
				Item four
			</TabPanel>
		</Box>
	);
}

export default Sections