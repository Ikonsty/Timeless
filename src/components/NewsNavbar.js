import React, { useState } from 'react';
import {
	AppBar,
	Toolbar,
	IconButton,
	Stack,
	Button,
	Menu,
	MenuItem,
	Box,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const NewsNavbar = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position='static'
				color='secondary'
				sx={{
					height: '5vh',
					marginTop: '20px',
					marginBottom: '20px',
					'& .MuiToolbar-root': {
						minHeight: '3vh',
					},
				}}
			>
				<Toolbar sx={{ justifyContent: 'center' }}>
					<Stack direction='row' spacing={5}>
						<Button color='inherit'>Latest</Button>
						<Button color='inherit'>Featured</Button>
						<Button color='inherit'>Worklife</Button>
						<Button color='inherit'>Fashion</Button>
						<Button color='inherit'>Travel</Button>
						<Button color='inherit'>Health</Button>
						<Button color='inherit'>Culture</Button>
						<Button
							color='inherit'
							id='resources-button'
							onClick={handleClick}
							aria-controls={open ? 'resources-menu' : undefined}
							aria-haspopup='true'
							aria-expanded={open ? 'true' : undefined}
							endIcon={<ArrowDropDownIcon />}
						>
							More
						</Button>
						<Button color='inherit'>Login</Button>
						<IconButton
							size='large'
							edge='start'
							color='inherit'
							aria-label='search'
						>
							<SearchIcon />
						</IconButton>
					</Stack>

					<Menu
						id='resources-menu'
						anchorEl={anchorEl}
						open={open}
						MenuListProps={{
							'aria-labelledby': 'resources-button',
						}}
						onClose={handleClose}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'right',
						}}
					>
						<MenuItem onClick={handleClose}>Blog</MenuItem>
						<MenuItem onClick={handleClose}>Podcast</MenuItem>
					</Menu>
				</Toolbar>
			</AppBar>
		</Box>
	);
};
