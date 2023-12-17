import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">

						<div className="work-title">European Souther Obersavotory (ESO)</div>
						<div className="work-subtitle">
						Apprenticeship 
						</div>
						<div className="work-duration">2019 </div>
						</div>
						<div className="work">

							<div className="work-title">Amazon Web Services (AWS)</div>
							<div className="work-subtitle">
								Solution Architect
							</div>
							<div className="work-duration">2020 - Present</div>
						</div>

						
					</div>
				}
			/>
		</div>
	);
};

export default Works;
