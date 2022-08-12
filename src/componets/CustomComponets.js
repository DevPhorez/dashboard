import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const SuccessOutlineButton = styled(Button)(() => ({
	color: '#51bfa0',
	borderColor: '#51bfa0',
	'&:hover': {
		borderColor: '#51ac92',
	},
}));

const SuccessContainedButton = styled(Button)(() => ({
	backgroundColor: '#51bfa0',
	color: '#fff',
	'&:hover': {
		backgroundColor: 'rgba(81,191,160,0.8)',
	}
}));

const PrimaryContainedButton = styled(Button)(() => ({
	backgroundColor: '#d099c5',
	color: '#fff',
	'&:hover': {
		backgroundColor: 'rgba(208,153,197,0.8)',
	}
}));

export { SuccessOutlineButton, PrimaryContainedButton, SuccessContainedButton }