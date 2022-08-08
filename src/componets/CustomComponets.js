import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const SuccessOutlineButton = styled(Button)(() => ({
	color: '#51bfa0',
	borderColor: '#51bfa0',
	'&:hover': {
		borderColor: '#51ac92',
	},
}));

const PrimaryContainedButton = styled(Button)(() => ({
	backgroundColor: '#d099c5',
	'&:hover': {
		backgroundColor: 'rgba(208,153,197,0.8)',
	}
}));

export { SuccessOutlineButton, PrimaryContainedButton }