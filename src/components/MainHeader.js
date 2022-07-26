import React from 'react';
import { Box, Grid, Divider } from '@mui/material';

export const MainHeader = () => {
	return (
		<Box sx={{ width: '100%' }}>
			<Grid container alignItems={'center'} spacing={2}>
				<Grid item xs={3}>
					<div className='header-info'>Vol. 127 - N. 39</div>
				</Grid>
				<Grid item xs={6}>
					<div className='main-title'>Timeless</div>
				</Grid>
				<Grid item xs={3}>
					<div className='header-info'>Price: free</div>
				</Grid>
			</Grid>

			<Divider>
				<div className='Nav-header'>NYC, Sunday, November 6, 1966</div>
			</Divider>
		</Box>
	);
};
