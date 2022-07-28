import React, { useState } from 'react';
import {
	AppBar,
	Toolbar,
	IconButton,
	Button,
	Menu,
	MenuItem,
	Typography,
	Box,
	Container,
	Tooltip,
	Avatar,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ListIcon from '@mui/icons-material/List';
import ilya from './ilya.png';

const topics = [
	'Latest',
	'Featured',
	'Worklife',
	'Fashion',
	'Travel',
	'Health',
	'Culture',
];

const settings = ['Profile', 'Account', 'Logout'];

export const NewsNavbar = () => {
	const [anchorElUser, setAnchorElUser] = useState(null);
	const [anchorElNav, setAnchorElNav] = useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};
	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar
			position='static'
			color='secondary'
			// sx={{
			// 	height: '5vh',
			// 	marginTop: '20px',
			// 	marginBottom: '20px',
			// 	'& .MuiToolbar-root': {
			// 		minHeight: '3vh',
			// 	},
			// }}
		>
			<Container maxWidth='xl'>
				<Toolbar sx={{ justifyContent: 'center' }}>
					<Box
						sx={{
							flexGrow: 1,
							display: {
								xs: 'flex',
								md: 'none',
							},
						}}
					>
						<IconButton
							size='large'
							aria-label='list of topics'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
						>
							<ListIcon />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{ display: { xs: 'block', md: 'none' } }}
						>
							{topics.map((topic) => (
								<MenuItem key={topic} onClick={handleCloseNavMenu}>
									<Typography textAlign='center'>{topic}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>

					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{topics.map((topic) => (
							<Button
								key={topic}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: 'inherit', display: 'block' }}
							>
								{topic}
							</Button>
						))}

						<IconButton
							size='large'
							edge='start'
							color='inherit'
							aria-label='search'
						>
							<SearchIcon />
						</IconButton>
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title='Open settings'>
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt='Ilya Konsty' src={ilya} />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id='menu-appbar'
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography textAlign='center'>{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
