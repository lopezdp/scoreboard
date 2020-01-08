import React, { Component } from "react";
//import Image from "react-bootstrap/Image";
//import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Media from "react-media";
import "./Scores.css";
//import UiLoadBtn from "./UiLoadBtn";
//import Tooltip from "react-bootstrap/Tooltip";
//import OverlayTrigger from "react-bootstrap/OverlayTrigger";

export default class Scores extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: false
		};
	}

	render() {
		return (
			<Container className="scores-view" fluid>
				<Row className="scores-view-game-results">
					<Jumbotron className="results-view">TEST</Jumbotron>
				</Row>
				<Row className="scores-view-game-results">
					<Jumbotron className="results-view">TEST</Jumbotron>
				</Row>
				<Row className="scores-view-game-results">
					<Jumbotron className="results-view">TEST</Jumbotron>
				</Row>
				<Row className="scores-view-game-results">
					<Jumbotron className="results-view">TEST</Jumbotron>
				</Row>
			</Container>
		);
	}
}
