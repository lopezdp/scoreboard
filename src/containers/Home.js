import React, { Component } from "react";
import "./Home.css";
//import HomeLandingPage from "../components/HomeLandingPage";

export default class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: false
		};
	}

	renderLandingPage() {
		return (
			<div className="LandingPage">
				TEST
				{/*<HomeLandingPage />*/}
			</div>
		);
	}

	render() {
		return <main className="Home">{this.renderLandingPage()}</main>;
	}
}
