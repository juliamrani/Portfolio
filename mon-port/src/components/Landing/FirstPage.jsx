import { Box, Typography } from '@mui/material';
import { useRef, useEffect } from 'react';
import Bouton from './Bouton';

export default function FirstPage() {
	const videoRef = useRef(null);

	useEffect(() => {
		videoRef.current?.play();
	}, []);

	return (
		<Box
			sx={{
				position: 'relative',
				minHeight: '100vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				textAlign: 'center',
				overflow: 'hidden',
				px: 2,
			}}
		>
			<Box
				sx={{
					position: 'absolute',
					inset: 0,
					background:
						'linear-gradient(rgba(10,42,51,0.6), rgba(10,42,51,0.8))',
				}}
			/>

			<video
				ref={videoRef}
				autoPlay
				muted
				playsInline
				style={{
					position: 'absolute',
					inset: 0,
					width: '100%',
					height: '100%',
					objectFit: 'cover',
					zIndex: -2,
				}}
				onEnded={() => {
					videoRef.current.currentTime = 0;
					videoRef.current.play();
				}}
			>
				<source src="src/assets/video1.webm" type="video/webm" />
			</video>

			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: 3,
					maxWidth: 700,
					animation: 'fadeUp 1.2s ease forwards',
					opacity: 0,
					transform: 'translateY(30px)',
					'@keyframes fadeUp': {
						to: { opacity: 1, transform: 'translateY(0)' },
					},
				}}
			>
				<Typography
					variant="h2"
					sx={{
						fontFamily: "'Bungee', cursive",
						fontWeight: 700,
						color: '#e3e1cf',
						letterSpacing: '-0.02em',
						fontSize: {
							xs: '2.2rem',
							sm: '2.8rem',
							md: '3.75rem',
						},
					}}
				>
					Welcome to my Portfolio
				</Typography>

				<Typography
					sx={{
						fontFamily: 'Space Mono',
						color: '#e3e1cf',
						fontSize: {
							xs: '0.8rem',
							sm: '1.2rem',
							md: '1.6rem',
						},
					}}
				>
					Navigating the vast sea of development to craft clean and structured applications.
				</Typography>

				<Bouton />
			</Box>
		</Box>
	);
}
