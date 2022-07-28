import React from 'react';
import { Box, Grid, Divider, Typography } from '@mui/material';

export const MainHeader = () => {
	return (
		<Box sx={{ width: '100%' }}>
			<Grid container alignItems={'center'} spacing={2}>
				<Grid item xs={3}>
					<Typography variant='h3'> Vol. 127 - N. 39</Typography>
				</Grid>
				<Grid item xs={6}>
					<Typography variant='h1'>Timeless</Typography>
				</Grid>
				<Grid item xs={3}>
					<Typography variant='h3'> Price: free</Typography>
				</Grid>
			</Grid>

			<Divider>
				<Typography variant='h2'>NYC, Sunday, November 6, 1966</Typography>
			</Divider>
		</Box>
	);
};
