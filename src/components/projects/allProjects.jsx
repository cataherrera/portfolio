import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/project.css";



const AllProjects = () => {
	return (
		<div className="all-projects-container">
				<div className="all-projects-project" >
					{/* <Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
						picture={project.picture}
					/> */}

					<div className="project-container">

						<div className="project-title">Robo4Kids</div>
						<div className="project-description">AWS Robo4Kids is a service that allows to extract all the complexity of logic programming for robots in a simple and easy graphical interface which can be used as a teaching tool for educational institutions, facilitating the learning of students in subjects such as robotics and programming and helping teachers and parents to educate future generations in useful skills for their professional development.,
						</div>
						<Link to="https://github.com/cataherrera/robo4kids">

						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<div className="project-link-text">Github Link</div>
						</div>
						</Link>

						<div className="project-image-container">
						<	div className="project-image-wrapper">
							<img
								src="jetbot-blockly.png"
								alt="about"
								className="project-image"
							/>
							</div>
							
						</div>
					</div>
					


			
			
				</div>
		</div>
	);
};

export default AllProjects;
