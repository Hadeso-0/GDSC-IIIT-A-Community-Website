import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Button, CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import styles from "./EventCard.module.css";
import Headings from "../Page_headings";
import image1 from "../../Assets/Images/img1.png";
import { Link } from "react-router-dom";
import { ReactComponent as RSVPsvg } from "../../Assets/svg_link.svg";
import { ReactComponent as Calendar } from "../../Assets/calendar.svg";
import { ReactComponent as Clock } from "../../Assets/clock.svg";
// import Stack from "@mui/material/Stack";

function EventCard() {
	const [admin, setAdmin] = useState(true);
	return (
		// <Box className="card" sx={{ minWidth: 275 }}>
		<Card variant="outlined" styles={{ padding: "0" }} className={styles.eventCard}>
			<CardActionArea>
				{/* <CardMedia component="img" height="140" image="../Assets/About_DSC_Image.png" alt="project image" /> */}

				{/* <CardMedia
					component="img"
					height="140"
					image="http://www.lacor.info/film/a_la_folie/img/galerie/large/a_la_folie_06.jpg"
					alt="project image"
					className="img"
				/> */}
				<img className={styles.img} src={image1} alt="img" />
				<CardContent>
					<div className={styles.container}>
						<div className={styles.name}>
							<Typography sx={{ fontSize: 18, fontWeight: "bold" }} color="text.primary" gutterBottom>
								Event Name
							</Typography>
							<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
								<Calendar className={styles.svg} />
								Event Date
							</Typography>
							<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
								<Clock className={styles.svg} />
								Time
							</Typography>
						</div>
					</div>
					{/* <Headings LargeHeading="Project Name" SmallHeading="tagline" /> */}

					<div className={styles.text}>
						<Typography variant="body2">
							The first MLH Fellowship, launched back in May, had nearly 20,000 amazing applicants from around
							the world.
						</Typography>
					</div>
				</CardContent>
				<CardActions className={styles.buttons}>
					<Link to="" style={{ textDecoration: "none" }}>
						<Button
							className={styles.RSVPbtn}
							size="small"
							variant="contained"
							disableElevation
							color="success"
						>
							<RSVPsvg className={styles.RSVPsvg} />
							RSVP Here
						</Button>
					</Link>
				</CardActions>
			</CardActionArea>

			{admin && (
				<CardActions className={styles.buttonsAdmin}>
					<Link to="" style={{ textDecoration: "none" }}>
						<Button className={styles.btn} size="small" variant="contained" disableElevation color="error">
							Delete
						</Button>
					</Link>
					<Link to="" style={{ textDecoration: "none" }}>
						<Button className={styles.btn} size="small" variant="outlined" disableElevation color="success">
							Edit
						</Button>
					</Link>
				</CardActions>
			)}
		</Card>
		// </Box>
	);
}

export default EventCard;
