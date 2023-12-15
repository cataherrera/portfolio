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

							<div className="work-title">AWS</div>
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
