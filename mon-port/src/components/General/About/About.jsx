import { Box, Typography, Container, Grid, Paper, Chip } from "@mui/material";
import Photo2 from "/src/assets/Photo2.png";

const sand = "#F4EDE4";
const blue = "#133d49";



const GlassCard = ({ children }) => (
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
		},
		}}
	>
		{children}
	</Paper>
);

export default function About() {
	return (
		<Box id="about">
			<Typography
				sx={{
					display: "flex",
					justifyContent: "center",
					fontFamily: "Montserrat",
					fontWeight: 800,
					px: 14,
					color: "#11313a",
					fontSize: {
					xs: "3.5rem", sm: "5rem", md: "7rem" }
				}}
			>
				About
			</Typography>


			<Box sx={{ py: 4, }} >
				<Container >
					<Grid>
						<Grid item xs={12} md={8}
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								py: 3,
								px: 8,
								gap: 6,
								flexDirection: "column",
								"@media (min-width:816px)": {
									flexDirection: "row"
								}
								}}
						>

							<Box
								component="img"
								src={Photo2}
								sx={{
									width: { xs: 180, sm: 220, md: 280 },
									borderRadius: "20px",
									boxShadow: "0 15px 40px rgba(0,0,0,0.5)"
								}}
							/>
			
								<Typography
									sx={{
										color: blue,
										lineHeight: 1.9,
										fontSize: "1.05rem",
										maxWidth: "600px",
										textAlign: "center",
										fontFamily: "Space Mono",
									}}
								>
									Curious and self-driven, I am currently studying Application Development at EPITECH. 
									I focus on building modern, intuitive, and impactful digital experiences. 
									My interests include web development, data, and management. 
									Seeking to grow as a developer and contribute to digital products that improve user experience and solve meaningful problems.
								</Typography>
							</Grid>
						</Grid>
			
{/*Academic*/}
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
									Academic Background
								</Typography>
			
								<Grid container spacing={2} mt={4}>
									<Grid item xs={12} md={6}>
										<GlassCard>
											<Typography fontWeight={700} fontSize="1.2rem" color={blue} fontFamily={"Montserrat"}>
											EPITECH
											</Typography>
											<Typography color="text.secondary" fontFamily={"Montserrat"}>
											2025 — 2028 · Bachelor in Application Development
											</Typography>
			
											<Typography fontWeight={600} fontFamily={"Montserrat"}>
												Project-based learning
											</Typography>
			
											<Typography mt={2} fontSize={14} lineHeight={1.8} fontFamily={"Space Mono"}>
												• Learning through projects that solve real-world problems, emphasizing technical skill, adaptability, and continuous growth.
												<br/>
												• Building strong foundations in software engineering, web technologies, and collaborative development, while enhancing critical thinking and scalable solutions.
												<br/>
												• Seeking to grow as a developer and contribute to digital products that improve user experience and solve meaningful problems.
											</Typography>
										</GlassCard>
									</Grid>
			
									<Grid item xs={12} md={6}>
										<GlassCard>
											<Typography fontWeight={700} fontSize="1.2rem" color={blue} fontFamily={"Montserrat"}>
											University of Rennes 2
											</Typography>
											<Typography color="text.secondary" fontFamily={"Montserrat"}>
											2021 — 2024 · Bachelor in Applied Foreign Languages
											</Typography>
			
											<Typography fontWeight={600} fontFamily={"Montserrat"}>
												International Business, English | Spanish
											</Typography>
			
											<Typography mt={2} fontSize={14} fontFamily={"Space Mono"}>
											• Key courses: International Marketing, Cross-Cultural Management, Global Trade Strategies
											<br/>
											• Academic exchange in Madrid (2023)
											</Typography>
										</GlassCard>
									</Grid>
								</Grid>
							</Box>
			
{/*Pro*/}
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
									Professionnal Experiences
								</Typography>
			
								<Grid container spacing={2}  mt={4}>
									<Grid item xs={12} md={6}>
										<GlassCard>
											<Typography fontWeight={700} fontSize="1.1rem" color={blue} fontFamily={"Montserrat"}>
											Team Member
											</Typography>
											<Typography color="text.secondary" fontFamily={"Montserrat"}>
											Ginger’s New York Coffee · 2024 — 2025
											</Typography>
			
											<Typography mt={2} fontSize={14} lineHeight={1.7} fontFamily={"Space Mono"}>
											• Customer service and order management
											<br />
											• Food & beverage preparation
											<br />
											• Inventory management and quality standards
											</Typography>
										</GlassCard>
									</Grid>
			
									<Grid item xs={12} md={6}>
										<GlassCard>
											<Typography fontWeight={700} fontSize="1.1rem" color={blue} fontFamily={"Montserrat"}>
											Seasonal Employee
											</Typography>
											<Typography color="text.secondary" fontFamily={"Montserrat"}>
											Atlantique Service · 2022
											</Typography>
			
											<Typography mt={2} fontSize={14} fontFamily={"Space Mono"}>
											• Work organization and task prioritization
											</Typography>
										</GlassCard>
									</Grid>
								</Grid>
							</Box>
			
{/*Skills*/}
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
									Skills
								</Typography>
			
								<Grid container spacing={2}  mt={4}>
									{[
									"Teamwork",
									"Adaptability",
									"Autonomy",
									"HTML",
									"CSS",
									"React",
									"Git",
									"SQL",
									].map((skill) => (
									<Grid item key={skill}>
										<Chip
										label={skill}
										sx={{
											background: "linear-gradient(135deg, #68a2a1, #164c77)",
											color: "#fff",
											fontWeight: 500,
											fontFamily: "Space Mono",
											px: 1.5,
											py: 2,
											borderRadius: "20px",
										}}
										/>
									</Grid>
									))}
								</Grid>
			
							</Box>
			
						</Container>
					</Box>

		</Box>
	)
}