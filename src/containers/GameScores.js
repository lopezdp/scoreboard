import React, { Component } from "react";
//import Image from "react-bootstrap/Image";
//import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
//import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Media from "react-media";
import "./GameScores.css";
//import UiLoadBtn from "./UiLoadBtn";
//import Tooltip from "react-bootstrap/Tooltip";
//import OverlayTrigger from "react-bootstrap/OverlayTrigger";

export default class HomeLandingPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: false
		};
	}

	render() {
		return (
			<Container className="main-view" fluid>
				<Row className="game-view-title">
					<h2>Games - Wild Card Weekend</h2>
				</Row>
				<Row className="game-view-result">
					<h3>Final</h3>
				</Row>
			</Container>
		);
	}
}
