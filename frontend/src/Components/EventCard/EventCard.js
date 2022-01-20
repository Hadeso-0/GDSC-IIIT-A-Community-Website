import * as React from "react";
import { useState,useContext } from 'react';
import apiContext from '../../ContextApi/ApiContext';
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
import moment from 'moment';
// import Stack from "@mui/material/Stack";

function EventCard(props) {
	const {event} = props
    const context =useContext(apiContext)
    const {removeData,previousCardData,removeEvent,getAttribute} = context
	const [admin, setAdmin] = useState(true);
	const [upcoming, setUpcoming] = useState(props.upcoming);
    const handleClick = ()=>{
		getAttribute(event);
		removeEvent(event._id);
	}
	function shorten(str, separator = ' ') {
		if(str){
		if (str.length <= 100) return str;
		return `${str.substr(0, str.lastIndexOf(separator, 100))}...`;
		}
	  }
	//   const currentDate = new Date();
	//   const eventDate = new Date(event.startDate);
	//   if(currentDate.getTime() >= eventDate.getTime() ){
	// 	  setUpcoming(true);
	//   }
	return (
		// <Box className="card" sx={{ minWidth: 275 }}>
		<Card variant="outlined" styles={{ padding: "0" }} className={styles.eventCard}>
			{/* <CardMedia component="img" height="140" image="../Assets/About_DSC_Image.png" alt="project image" /> */}

			{/* <CardMedia
					component="img"
					height="140"
					image="http://www.lacor.info/film/a_la_folie/img/galerie/large/a_la_folie_06.jpg"
					alt="project image"
					className="img"
				/> */}
			<div className={styles.imgContainer}>
				<img className={styles.img} src={event.image} alt="img" />
			</div>
			<div className={styles.content}>
				<CardContent>
					<div className={styles.container}>
						<div className={styles.name}>
							<Typography sx={{ fontSize: 18, fontWeight: "bold" }} color="text.primary" gutterBottom>
								{event.name}
							</Typography>
							<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
								<Calendar className={styles.svg} />
								{moment(`${event.startDate}`).format("Do MMM YYYY")} 
							</Typography>
							<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
							
								
							</Typography>
						</div>
					</div>
					{/* <Headings LargeHeading="Project Name" SmallHeading="tagline" /> */}

					<div className={styles.text}>
						<Typography variant="body2" style={{width:'90%'}}>

						{shorten(event.description)}
						</Typography>
					</div>
				</CardContent>

				{upcoming && (
					<CardActions className={styles.buttons}>
						<Link to="" style={{ textDecoration: "none" }}>
							<Button
								className={styles.RSVPbtn}
								size="small"
								variant="contained"
								disableElevation
								style={{ backgroundColor: "#08ad5d" }}
							>
								<RSVPsvg className={styles.RSVPsvg} />
								RSVP Here
							</Button>
						</Link>
					</CardActions>
				)}

				{admin && (
					<CardActions className={styles.buttonsAdmin}>
						
							<Button
							 onClick={handleClick}
								className={styles.btn}
								size="small"
								variant="contained"
								disableElevation
								style={{ backgroundColor: "#EA4335" }}
							>
								Delete
							</Button>
						
						<Link onClick={()=>previousCardData(event)} to="/Events/editEvent" style={{ textDecoration: "none" }}>
							<Button
								className={styles.btn}
								size="small"
								variant="outlined"
								disableElevation
								style={{ color: "#08ad5d", borderColor: "#08ad5d" }}
							>
								Edit
							</Button>
						</Link>
					</CardActions>
				)}
			</div>
		</Card>
		// </Box>
	);
}

export default EventCard;
