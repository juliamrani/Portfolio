import { Box, Typography, Container, Grid, Paper, Chip } from '@mui/material';
import Photo2 from '/src/assets/Photo2.png';

const blue = '#133d49';

const GlassCard = ({ children }) => (
	<Paper
		elevation={0}
		sx={{
			p: 4,
			background: 'rgba(255,255,255,0.6)',
			backdropFilter: 'blur(12px)',
			border: '2px solid rgba(255, 255, 255, 0.78)',
			borderRadius: '10px',
			transition: 'all 0.4s ease',
			'&:hover': {
				transform: 'translateY(-5px)',
				boxShadow: '0 20px 60px rgba(34, 35, 42, 0.1)',
				background: 'rgba(251, 220, 244, 0.47)',
				borderColor: 'rgb(179, 148, 170)',
			},
		}}
	>
		{children}
	</Paper>
);

const Title = ({ children }) => (
	<Typography
		sx={{
			fontFamily: 'Montserrat',
			fontWeight: 700,
			color: blue,
			fontSize: {
				xs: '1.5rem',
				sm: '2rem',
				md: '2.2rem',
			},
		}}
	>
		{children}
	</Typography>
);

const SmallT = ({ children }) => (
	<Typography
		fontWeight={600}
		fontFamily={'Montserrat'}
		sx={{
			mt: 3,
			fontSize: {
				xs: '0.9rem',
				sm: '1rem',
				md: '1.1rem',
			},
		}}
	>
		{children}
	</Typography>
);

const Date = ({ children }) => (
	<Typography
		color="text.secondary"
		fontFamily={'Montserrat'}
		sx={{
			fontSize: {
				xs: '0.85rem',
				sm: '1rem',
				md: '1.1rem',
			},
		}}
	>
		{children}
	</Typography>
);

const Descr = ({ children }) => (
	<Typography
		mt={2}
		lineHeight={1.8}
		fontFamily={'Space Mono'}
		sx={{
			fontSize: {
				xs: '0.75rem',
				sm: '0.8rem',
				md: '0.88rem',
			},
		}}
	>
		{children}
	</Typography>
);

export default function Projects() {
	return (
		<Box id="projects">
			<Typography
				sx={{
					display: 'flex',
					justifyContent: 'center',
					fontFamily: 'Montserrat',
					fontWeight: 800,
					mt: 20,
					px: 14,
					color: '#11313a',
					fontSize: {
						xs: '3.5rem',
						sm: '5rem',
						md: '7rem',
					},
				}}
			>
				Projects
			</Typography>

			<Box sx={{ py: 4 }}>
				<Container>
					<Typography
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							color: blue,
							lineHeight: 1.9,
							fontSize: '1.05rem',
							maxWidth: '600px',
							textAlign: 'center',
							fontFamily: 'Space Mono',
							mx: 'auto',
						}}
					>
						Here are some examples of projects I had the chance to
						work on during this first year in EPITECH.
					</Typography>
					{/*E-Todo*/}
					<Box mt={16}>
						<Title>
							E-Todo - Web Application for Task Management
						</Title>

						<Grid container spacing={2} mt={4}>
							<Grid item xs={12} md={6}>
								<GlassCard>
									<Date>
										<strong> Project description: </strong>{' '}
										Complete development of a To-Do web application (MySQL database,
										Node.js/Express REST API, and user interface) allowing fluid management of
										tasks and users.
									</Date>

									<SmallT>My contribution</SmallT>
									<Descr>
										• Designed and developed the entire user interface using HTML, CSS, and React.js.
										<br />• Optimized user experience (UX/UI) by creating a responsive design
										(mobile and desktop) with consistent visual branding and clear interaction feedback.
									</Descr>

									<SmallT>What I learned...</SmallT>
									<Descr>
										I mastered dynamic state management in React.js and learned how to properly
										secure front-end components.
									</Descr>
								</GlassCard>
							</Grid>
						</Grid>
					</Box>

					{/*Hack&Juice*/}
					<Box mt={16}>
						<Title>Hack & Juice - Cybersecurity</Title>

						<Grid container spacing={2} mt={4}>
							<Grid item xs={12} md={6}>
								<GlassCard>
									<Date>
										<strong> Project description: </strong>{' '}
										Practical computer security project focused on discovering, exploiting, and
										documenting application vulnerabilities through the OWASP Juice Shop platform.
									</Date>

									<SmallT>My contribution</SmallT>
									<Descr>
										• Conducted the entire project in total autonomy (solo).
										<br />
										• Performed targeted code analysis and penetration testing covering various
										categories of the OWASP Top 10 (such as injections, XSS flaws, or broken
										authentication).
										<br />• Solved and thoroughly documented advanced security challenges, including
										attack methodology and code patch research.
									</Descr>

									<SmallT>What I learned...</SmallT>
									<Descr>
										I improved personal autonomy and technical writing skills by producing
										comprehensive security write-ups and introduced myself to cybersecurity.
									</Descr>
								</GlassCard>
							</Grid>
						</Grid>
					</Box>

					{/*Alice in Wonderland*/}
					<Box mt={16}>
						<Title>
							Alice in Wonderland – NLP Engine (Natural Language
							Processing)
						</Title>

						<Grid container spacing={2} mt={4}>
							<Grid item xs={12} md={6}>
								<GlassCard>
									<Date>
										<strong> Project description: </strong>{' '}
										Development of a Command Line Interface (CLI) NLP engine that analyzes books
										from Project Gutenberg to generate synthetic "book cards" for publishers
										and editors.
									</Date>

									<SmallT>My contribution</SmallT>
									<Descr>
										•{' '}
										<strong>
											Lexical Diversity Measurements:
										</strong>{' '}
										Implemented the module assessing the richness of an author's vocabulary by
										calculating key metrics (tokens, unique types, hapax legomena, TTR ratio,
										average word length).
										<br />•{' '}
										<strong>
											Book Summarization:
										</strong>{' '}
										Developed the text condensation pipeline, exploring and justifying the
										trade-offs between extractive and lightweight abstractive methods.
										<br />•{' '}
										<strong>
											Technical Documentation:
										</strong>{' '}
										Authored the complete project documentation and designed diagrams
										illustrating the main stages of the NLP pipelines.
									</Descr>

									<SmallT>What I learned...</SmallT>
									<Descr>
										I learned how to process raw text into structured data using Python/NLP tools
										and I acquired documentation habits, how to clearly justify a choice.
									</Descr>
								</GlassCard>
							</Grid>
						</Grid>
					</Box>

					{/*Eliza*/}
					<Box mt={16}>
						<Title>
							ELIZA – Intelligent Chatbot & Marketing Strategy
						</Title>

						<Grid container spacing={2} mt={4}>
							<Grid item xs={12} md={6}>
								<GlassCard>
									<Date>
										<strong> Project description: </strong>{' '}
										Conception of an intelligent conversational agent (chatbot)
										responding to a real business need to optimize company processes.
									</Date>

									<SmallT>My contribution</SmallT>
									<Descr>
										• <strong>UI/UX & Prototyping: </strong>{' '}
										Created a visual identity and designed the full user interface on Figma,
										ensuring a cleaned, modern, and engaging user experience.
										<br />•{' '}
										<strong>Business Report:</strong>{' '}
										Drafted the marketing report defining targets, user needs, the product value
										chain, the impact of AI on cost optimization, and Return on Investment
										(ROI) via clear Key Performance Indicators (KPIs).
									</Descr>

									<SmallT>What I learned...</SmallT>
									<Descr>
										I learned to think like a product designer and marketer and I improved in
										prototyping workflows and user-centered design principles to build a highly
										professional interface.
									</Descr>
								</GlassCard>
							</Grid>
						</Grid>
					</Box>


					{/*Job Aggregator*/}
					<Box mt={16}>
						<Title>
							Job Aggregator – Job Platform
						</Title>
						<Grid container spacing={2} mt={4}>
							<Grid item xs={12} md={6}>
								<GlassCard>
									<Date>
										<strong>Project description: </strong>{' '}
										Design and development of a complete job aggregator platform collecting external
										offers, standardizing data, and helping users make better career decisions — built in partnership with
										WeLoveDevs, a real-world tech hiring platform.
									</Date>
									<SmallT>My contribution</SmallT>
									<Descr>
										• <strong>UI/UX & Prototyping: </strong>{' '}
										Designed the full visual identity and user interface on Figma, covering key flows including
										registration, offer search, offer details, and the admin dashboard, with a focus on WCAG 2.1 accessibility 
										compliance.
										<br />•{' '}
										<strong>Frontend Development:</strong>{' '}
										Built the responsive frontend in Angular, implementing the user dashboard, offer search and
										filtering, offer detail pages, and the admin moderation interface, connected to the REST
										backend API.
										<br />•{' '}
										<strong>Business Documentation:</strong>{' '}
										Led the product and market discovery phase, writing the market analysis, defining the value
										proposition and identifying user pain points.
									</Descr>
									<SmallT>What I learned...</SmallT>
									<Descr>
										I learned to bridge product thinking with technical execution, from translating user needs
										into wireframes and accessible interfaces, to documenting choices in a
										professional format. This project strengthened my ability to work across the full
										product lifecycle within a multidisciplinary team.
									</Descr>
								</GlassCard>
							</Grid>
						</Grid>
					</Box>
				</Container>
			</Box>
		</Box>
	);
}
