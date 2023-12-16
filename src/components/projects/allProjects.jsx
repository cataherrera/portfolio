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

					<div className="project-container">

					<div className="project-title">ESO Observatory Research - Telescope Performance Monitoring Tool Kit </div>
					<div className="project-description">Development for monitoring analyzing and displaying relevant performance metrics for the Very Large Telescope (VLT).
					</div>
					<ul>
						<li>Developed tool kit for monitoring, analyzing and displaying relevant performance metrics for the Very Large Telescope (VLT).</li>
						<li> Created models for parameters for re-calibration of the Very Large Telescope (VLT) positioning models</li>
						<li> Created models for each focus of the Unit Telescope for the calibration and focus change processes.</li>
						<li> Created models and analyzed quality parameters of images in pre-observation processes.</li>

					</ul> 

					<p>I worked in a team with Vitorrio Nurzia, the Systems and Optics chief, and astronomer Pascale Hibbon. The objective of this project was to create tools to be able to monitor the performance of the Very Large Telescope (VLT). Monitoring performance indicators of the telescope is a critical factor in achieving the goal of having the best possible instruments and technology for astronomic research. For this project, the objective was to focus on metrics most relevant for science operations.</p>
					<p>The project was performed through Jupyter notebook files called dashboards, where each one had an implemented interface to make the information easily accessible for astronomers and Technical Instrument Operators (TIOs). The dashboards implemented were UT Preset Sequence, UT Preset Time Analysis, Focus Change Sequence, Focus Change Time Analysis, Pointing Model Accuracy and Image Analysis Convergence Speed.</p>
					<p>At the end of this project, all these dashboards were available for the professionals at ESO, transforming a large quantity of data into meaningful information. This project made it possible to develop company standards of focus change time, preset time and image quality, as well as tools in the Pointing Model Accuracy that will allow to determine when to update the mathematical model for better quality observations.</p>
					<a href="Portafolio - ESO.pdf">

					<div className="project-link">
						<div className="project-link-icon">
							<FontAwesomeIcon icon={faLink} />
						</div>

						<div className="project-link-text">Report pdf Link - Spanish </div>
					</div>
					</a>

					<div className="project-image-container">
					<	div className="project-image-wrapper">
						<img
							src="ESO.jpg"
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
