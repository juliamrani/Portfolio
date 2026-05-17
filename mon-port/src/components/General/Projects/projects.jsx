import { Box, Typography, Container, Grid, Paper, Chip } from "@mui/material";
import Photo2 from "/src/assets/Photo2.png";

const blue = "#133d49";



const GlassCard = ({ 
	children, 
}) => (
	<Paper
		elevation={0}
		sx={{
		p: 4,
		background: "rgba(255,255,255,0.6)",
		backdropFilter: "blur(12px)",
		border: "2px solid rgba(255, 255, 255, 0.78)",
		transition: "all 0.4s ease",
		"&:hover": {
			transform: "translateY(-5px)",
			boxShadow: "0 20px 60px rgba(34, 35, 42, 0.1)",
			background: "rgba(251, 220, 244, 0.47)",
			borderColor: "rgb(179, 148, 170)",
		},
		}}
	>
		{children}
	</Paper>
);

export default function Projects() {
	return (
		<Box id="projects">
			<Typography
				sx={{
					display: "flex",
					justifyContent: "center",
					fontFamily: "Montserrat",
					fontWeight: 800,
					mt: 20,
					px: 14,
					color: "#11313a",
					fontSize: {
					xs: "3.5rem", sm: "5rem", md: "7rem" }
				}}
			>
				Projects
			</Typography>


			<Box sx={{ py: 4, }} >
				<Container>
					<Typography
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							color: blue,
							lineHeight: 1.9,
							fontSize: "1.05rem",
							maxWidth: "600px",
							textAlign: "center",
							fontFamily: "Space Mono",
							mx: "auto",
						}}
					>
						Here are some examples of projects I had the chance to work on during this first year in EPITECH.
					</Typography>
{/*E-Todo*/}			
					<Box mt={16}>
						<Typography
							sx={{
								fontFamily: "Montserrat",
								fontWeight: 700,
								color: blue,
								fontSize: {
								xs: "1.5rem", sm: "2rem", md: "2.2rem"
								}
							}}
							>
								E-Todo - Web Application for Task Management
						</Typography>
			
						<Grid container spacing={2} mt={4}>
							<Grid item xs={12} md={6}>
								<GlassCard>
									<Typography color="text.secondary" fontFamily={"Montserrat"}>
										<strong> Project description: </strong>{" "}
										Complete development of a To-Do web application (MySQL database, Node.js/Express REST API, and user interface) allowing fluid management of tasks and users.
									</Typography>
		
									<Typography mt={2} fontWeight={600} fontFamily={"Montserrat"}>
										My contribution
									</Typography>
									<Typography fontSize={14} lineHeight={1.8} fontFamily={"Space Mono"}>
										• Designed and developed the entire user interface using HTML, CSS, and React.js.
										<br/>
										• Optimized user experience (UX/UI) by creating a responsive design (mobile and desktop) with consistent visual branding and clear interaction feedback.
									</Typography>

									<Typography mt={4} fontWeight={600} fontFamily={"Montserrat"}>
										What I learned...
									</Typography>
									<Typography fontSize={14} lineHeight={1.8} fontFamily={"Space Mono"}>
										I mastered dynamic state management in React.js and learned how to properly secure front-end components.
									</Typography>
								</GlassCard>
							</Grid>
						</Grid>
					</Box>

{/*Hack&Juice*/}
					<Box mt={16}>
						<Typography
							sx={{
								fontFamily: "Montserrat",
								fontWeight: 700,
								color: blue,
								fontSize: {
								xs: "1.5rem", sm: "2rem", md: "2.2rem"
								}
							}}
							>
								Hack & Juice - Cybersecurity
						</Typography>
			
						<Grid container spacing={2} mt={4}>
							<Grid item xs={12} md={6}>
								<GlassCard>
									<Typography color="text.secondary" fontFamily={"Montserrat"}>
										<strong> Project description: </strong>{" "}
										Practical computer security project focused on discovering, exploiting, and documenting application vulnerabilities through the OWASP Juice Shop platform.
									</Typography>
		
									<Typography mt={2} fontWeight={600} fontFamily={"Montserrat"}>
										My contribution
									</Typography>
									<Typography fontSize={14} lineHeight={1.8} fontFamily={"Space Mono"}>
										• Conducted the entire project in total autonomy (solo).
										<br/>
										• Performed targeted code analysis and penetration testing covering various categories of the OWASP Top 10 (such as injections, XSS flaws, or broken authentication).
										<br/>
										• Solved and thoroughly documented advanced security challenges, including attack methodology and code patch research.
									</Typography>

									<Typography mt={4} fontWeight={600} fontFamily={"Montserrat"}>
										What I learned...
									</Typography>
									<Typography fontSize={14} lineHeight={1.8} fontFamily={"Space Mono"}>
										I improved personal autonomy and technical writing skills by producing comprehensive security write-ups and introduced myself to cybersecurity.
									</Typography>
								</GlassCard>
							</Grid>
						</Grid>
					</Box>

{/*Alice in Wonderland*/}
					<Box mt={16}>
						<Typography
							sx={{
								fontFamily: "Montserrat",
								fontWeight: 700,
								color: blue,
								fontSize: {
								xs: "1.5rem", sm: "2rem", md: "2.2rem"
								}
							}}
							>
								Alice in Wonderland – NLP Engine (Natural Language Processing)
						</Typography>
			
						<Grid container spacing={2} mt={4}>
							<Grid item xs={12} md={6}>
								<GlassCard>
									<Typography color="text.secondary" fontFamily={"Montserrat"}>
										<strong> Project description: </strong>{" "}
										Development of a Command Line Interface (CLI) NLP engine that analyzes books from Project Gutenberg to generate synthetic "book cards" for publishers and editors.
									</Typography>
		
									<Typography mt={2} fontWeight={600} fontFamily={"Montserrat"}>
										My contribution
									</Typography>
									<Typography fontSize={14} lineHeight={1.8} fontFamily={"Space Mono"}>
										• <strong>Lexical Diversity Measurements:</strong> Implemented the module assessing the richness of an author's vocabulary by calculating key metrics (tokens, unique types, hapax legomena, TTR ratio, average word length).
										<br/>
										• <strong>Book Summarization:</strong> Developed the text condensation pipeline, exploring and justifying the trade-offs between extractive and lightweight abstractive methods.
										<br/>
										• <strong>Technical Documentation:</strong> Authored the complete project documentation and designed diagrams illustrating the main stages of the NLP pipelines.
									</Typography>

									<Typography mt={4} fontWeight={600} fontFamily={"Montserrat"}>
										What I learned...
									</Typography>
									<Typography fontSize={14} lineHeight={1.8} fontFamily={"Space Mono"}>
										I learned how to process raw text into structured data using Python/NLP tools and I acquired documentation habits, how to clearly justify a choice.
									</Typography>
								</GlassCard>
							</Grid>
						</Grid>
					</Box>

{/*Eliza*/}
					<Box mt={16}>
						<Typography
							sx={{
								fontFamily: "Montserrat",
								fontWeight: 700,
								color: blue,
								fontSize: {
								xs: "1.5rem", sm: "2rem", md: "2.2rem"
								}
							}}
							>
								ELIZA – Intelligent Chatbot & Marketing Strategy
						</Typography>
			
						<Grid container spacing={2} mt={4}>
							<Grid item xs={12} md={6}>
								<GlassCard>
									<Typography color="text.secondary" fontFamily={"Montserrat"}>
										<strong> Project description: </strong>{" "}
										Conception of an intelligent conversational agent (chatbot) responding to a real business need to optimize company processes.
									</Typography>
		
									<Typography mt={2} fontWeight={600} fontFamily={"Montserrat"}>
										My contribution
									</Typography>
									<Typography fontSize={14} lineHeight={1.8} fontFamily={"Space Mono"}>
										• <strong>UI/UX & Prototyping: </strong> Created a visual identity and designed the full user interface on Figma, ensuring a cleaned, modern, and engaging user experience.
										<br/>
										• <strong>Business Report:</strong> Drafted the marketing report defining targets, user needs, the product value chain, the impact of AI on cost optimization, and Return on Investment (ROI) via clear Key Performance Indicators (KPIs)
									</Typography>

									<Typography mt={4} fontWeight={600} fontFamily={"Montserrat"}>
										What I learned...
									</Typography>
									<Typography fontSize={14} lineHeight={1.8} fontFamily={"Space Mono"}>
										I learned to think like a product designer and marketer and I improved in prototyping workflows and user-centered design principles to build a highly professional interface.
									</Typography>
								</GlassCard>
							</Grid>
						</Grid>
					</Box>
				</Container>
			</Box>
		</Box>
	)
}