import React from 'react';
import { Button, Stack } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export const NewsControl = ({ newsPosition }) => {
	return (
		<Stack spacing={1} direction='row'>
			<Button
				variant='navigation'
				startIcon={<NavigateBeforeIcon />}
				onClick={() => alert(`Previous: ${newsPosition}`)}
			></Button>
			<Button
				variant='navigation'
				startIcon={<NavigateNextIcon />}
				onClick={() => alert(`Next: ${newsPosition}`)}
			></Button>
		</Stack>
	);
};
