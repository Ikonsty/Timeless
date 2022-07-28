import { Grid, Typography } from '@mui/material';
import React from 'react';
import { NewsControl } from './NewsControl';

export const NewsPaperBody = () => {
	return (
		<Grid
			container
			sx={{
				margin: '2vh 0  2vh 0',
			}}
		>
			<Grid
				item
				xs={2.5}
				sx={{
					padding: '0 2vw 0 0',
				}}
			>
				<Typography variant='h5'>What is Lorem Ipsum?</Typography>
				<Typography align='justify'>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book.
				</Typography>
				<NewsControl newsPosition='left' />
			</Grid>

			<Grid
				item
				xs={7}
				sx={{
					borderRight: '2px dashed',
					borderLeft: '2px dashed',
					borderColor: '#172c1c',
					padding: '0 2vw 0 2vw',
				}}
			>
				<Typography variant='h4'>Where does it come from?</Typography>
				<Typography align='justify'>
					Contrary to popular belief, Lorem Ipsum is not simply random text. It
					has roots in a piece of classical Latin literature from 45 BC, making
					it over 2000 years old. Richard McClintock, a Latin professor at
					Hampden-Sydney College in Virginia, looked up one of the more obscure
					Latin words, consectetur, from a Lorem Ipsum passage, and going
					through the cites of the word in classical literature, discovered the
					undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
					1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
					Evil) by Cicero, written in 45 BC. This book is a treatise on the
					theory of ethics, very popular during the Renaissance. The first line
					of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
					section 1.10.32. The standard chunk of Lorem Ipsum used since the
					1500s is reproduced below for those interested. Sections 1.10.32 and
					1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
					reproduced in their exact original form, accompanied by English
					versions from the 1914 translation by H. Rackham.
				</Typography>
				<NewsControl newsPosition='main' />
			</Grid>

			<Grid
				item
				xs={2.5}
				sx={{
					padding: '0 0 0 2vw',
				}}
			>
				<Typography variant='h5'>Why do we use it?</Typography>
				<Typography align='justify'>
					It is a long established fact that a reader will be distracted by the
					readable content of a page when looking at its layout. The point of
					using Lorem Ipsum is that it has a more-or-less normal distribution of
					letters, as opposed to using 'Content here, content here', making it
					look like readable English.
				</Typography>
				<NewsControl newsPosition='right' />
			</Grid>
		</Grid>
	);
};
