import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import LightModeIcon from '@mui/icons-material/LightMode';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Projects', 'Contact'];

export default function NavBar(props) {
	const { window: WindowProp } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [scrolled, setScrolled] = React.useState(false);

	React.useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
			<List>
				{navItems.map((item) => (
					<ListItem key={item} disablePadding>
						<ListItemButton sx={{ textAlign: 'center' }}>
							<ListItemText primary={item} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const container = WindowProp !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />

			<AppBar
				component="nav"
				elevation={scrolled ? 0 : 1}
				sx={{
					backgroundColor: scrolled
						? "rgba(255,255,255,0.6)"
						: "#b7b39c",
					backdropFilter: scrolled ? "blur(12px)" : "none",
					WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
					color: "#111",
					borderBottom: scrolled
						? "1px solid rgba(0,0,0,0.08)"
						: "1px solid rgba(0,0,0,0.12)",
					transition: "all 0.35s ease",
				}}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>

					<Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
						{navItems.map((item) => (
							<Button key={item} sx={{ color: '#111', borderRadius: "14px", }}>
								{item}
							</Button>
						))}
					</Box>

					<Box sx={{ flexGrow: 1 }} />

					<IconButton color="inherit">
						<LightModeIcon />
					</IconButton>
				</Toolbar>
			</AppBar>

			<nav>
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{ keepMounted: true }}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth
						},
					}}
				>
					{drawer}
				</Drawer>
			</nav>
		</Box>
	);
}

