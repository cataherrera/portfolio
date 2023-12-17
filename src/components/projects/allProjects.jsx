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
						<div className="project-description">
						<p>AWS Robo4Kids is a graphical programming interface that simplifies robotics and coding education. It abstracts away complex logic programming, enabling students to visually assemble behaviors and focus on computational thinking skills. </p>
						<p>As an educational tool, Robo4Kids facilitates project-based learning in robotics, computer science, and coding. The intuitive drag-and-drop interface allows students to quickly build and iterate on robot projects. This hands-on learning system promotes engagement, experimentation, and mastery.</p>
						<p>Educators can use Robo4Kids to teach coding fundamentals, algoritmic thinking, and principles in robotics and engineering. The platform is designed to complement computing curriculums for K-12 students and beyond. Lesson plans, code examples, and pre-made robot recipes help teachers use Robo4Kids in the classroom.</p>
						<p>With Robo4Kids, complex robot programming becomes accessible. Students, teachers, and parents can unleash their creativity through a simple yet powerful graphical interface. The open-source platform aims to make robotics education fun, engaging, and available to all.</p>
						</div>
						<Link to="https://github.com/cataherrera/robo4kids">

						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<div className="project-link-text">Github Link</div>
						</div>
						</Link>

						<Link to="https://github.com/cataherrera/Cloud4kids-Robo4kids">

						<div className="project-link">
						<div className="project-link-icon">
						<FontAwesomeIcon icon={faLink} />
						</div>

						<div className="project-link-text">Github Joined Proyect with jetbotsamples Link</div>
						</div>
						</Link>
						<div><p></p></div>



		

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

				<div className="all-projects-project" >


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
					<p>The project was performed through Jupyter notebook files called dashboards, where each one had an implemented interface to make the information easily accessible for astronomers and Technical Instrument Operators (TIOs). The dashboards implemented weere UT Preset Sequence, UT Preset Time Analysis, Focus Change Sequence, Focus Change Time Analysis, Pointing Model Accuracy and Image Analysis Convergence Speed.</p>
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


				<div className="all-projects-project" >

					<div className="project-container">

					<div className="project-title">Coasin Cognitive Tecnologies </div>
					<div className="project-description">
					I was a Participant in the Limitless Program of the UC Innovation Center at the COASIN company 2018, where we had to research cognitive technologies for use in call centers. Specifically, we developed a prototype that analyzed the emotions of call center support executives in order to detect problematic calls. We came out third among the nearly 50 challenges in the program during that semester.
					<p></p>
					<p></p>

					</div>
					<div className="project-image-container">
					<	div className="project-image-wrapper">
						<img
							src="coasin1.png"
							alt="about"
							className="project-image"
						/>
						</div>
						
					</div>
					<div className="project-image-container">
					<	div className="project-image-wrapper">
						<img
							src="coasin2.jpg"
							alt="about"
							className="project-image"
						/>
						</div>
						
					</div>
					</div>
				</div>
				<div className="all-projects-project" >

					<div className="project-container">

					<div className="project-title"> Interactive Retail Display for Personalized Fitness Shopping </div>
					<div className="project-description">
					<p>The project aimed to create a personalized and engaging shopping experience through the use of interactive technology within a retail display.</p> 
					<p>When customers approached the display, they were able to choose which muscle groups they wanted to target in their workout, such as their arms, core, or legs. Underneath the display, various workout products were embedded with lighting. As the customer selected specific muscle groups on the interactive interface, the lighting network would activate under the relevant products - those that target the muscles selected. </p>
					<p>This allowed the display to highlight and showcase only the products tailored to each customer's expressed interests and needs. The interactive component provided customization to each shopper while also delivering a more immersive, dynamic experience aimed to educate and assist customers in purchasing workout products best suited to their preferences. The technology transformed a traditional static retail display into an interactive and personalized experience focused entirely on addressing each customer's needs and goals.</p>
			
					</div>
					<div className="project-image-container">
					<	div className="project-image-wrapper">
						<img
							src="sparta1.png"
							alt="about"
							className="project-image"
						/>
						</div>
						
					</div>

					<div className="project-image-container">
					<	div className="project-image-wrapper">
						<img
							src="sparta2.png"
							alt="about"
							className="project-image"
						/>
						</div>
						
					</div>
					</div>
				</div>
				<div className="all-projects-project" >


					<div className="project-container">

					<div className="project-title">Creativity and Technology in Education, Undergraduate Research </div>
					<div className="project-description">

					Research for new technologies to reduce learning gaps between students from different socioeconomic backgrounds. Developing techniques for learning with creativity about physics in public schools, with the help of a tech Ball that measures velocity acceleration position to teach kids in an interactive way.

					</div>
					<div className="project-image-container">
					<	div className="project-image-wrapper">
						<img
							src="lapelota.png"
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
