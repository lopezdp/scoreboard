import React, { Component } from "react";
import "./Home.css";
import GameScores from "../containers/GameScores";

export default class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: false
		};
	}

	renderLandingPage() {
		return (
			<div className="home-container">
				<GameScores />
			</div>
		);
	}

	render() {
		return <main className="Home">{this.renderLandingPage()}</main>;
	}
}
