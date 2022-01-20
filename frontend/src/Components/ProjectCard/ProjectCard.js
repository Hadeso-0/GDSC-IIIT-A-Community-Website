import * as React from "react";
import { useState,useContext } from "react";
import apiContext from "../../ContextApi/ApiContext";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import styles from "./ProjectCard.module.css";
import { ReactComponent as ViewProject } from "../../Assets/svg_link.svg";
import { ReactComponent as Github } from "../../Assets/Vector.svg";
import { Link ,useHistory} from "react-router-dom";
// import Stack from "@mui/material/Stack";
import image1 from "../../Assets/Images/img1.png";

function ProjectCard(props) {
	const context = useContext(apiContext)
    const {removeData,previousCardData,removeProject,getAttribute} = context
	const {project} = props
	const [admin, setAdmin] = useState(true);
	const handleClick = () =>{
		getAttribute(project)
		removeProject(project._id);	
	}
	function shorten(str, separator = ' ') {
		if(str){
		if (str.length <= 100) return str;
		return `${str.substr(0, str.lastIndexOf(separator, 100))}...`;
		}
	  }
	return (
		<Box className={styles.card} sx={{ minWidth: 275 }}>
			<Card variant="outlined">
				<CardContent>
					<div className={styles.container}>
						<div className={styles.img}>
							<Avatar src={project.image}  sx={{ width: 76, height: 76 }} />
						</div>
						<div className={styles.name}>
							<Typography
								sx={{ fontSize: 20, fontWeight: "bold", margin: "0" }}
								color="text.primary"
								gutterBottom
							>
								{project.projectname}
							</Typography>
							<Typography sx={{ fontSize: 14, margin: "0" }} color="text.secondary" gutterBottom>
								Jobs for all
							</Typography>
						</div>
					</div>

					<div className={styles.text}>
						<Typography variant="body2" sx={{ margin: 0 }}>
						{shorten(project.description)}
						</Typography>
					</div>
				</CardContent>
				<CardActions className={styles.buttons}>
					<Link to={project.githubLink} style={{ textDecoration: "none" }}>
						<Button
							className={styles.btn}
							size="small"
							variant="outlined"
							style={{ color: "#08ad5d", borderColor: "#08ad5d" }}
						>
							<Github className={styles.svg} />
							Github Link
						</Button>
					</Link>
					<Link to={project.projectLink} style={{ textDecoration: "none" }}>
						<Button
							className={styles.btn}
							size="small"
							variant="contained"
							disableElevation
							style={{ backgroundColor: "#08ad5d" }}
						>
							<ViewProject className={styles.svg} />
							View Project
						</Button>
					</Link>
				</CardActions>
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
					
						<Link  to="/Projects/EditProject" onClick={()=>previousCardData(project)} style={{ textDecoration: "none" }}>
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
			</Card>
		</Box>
	);
}

export default ProjectCard;
