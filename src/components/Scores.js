import React, { Component } from "react";
//import Image from "react-bootstrap/Image";
//import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Media from "react-media";
import "./Scores.css";
import Image from "react-bootstrap/Image";
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
					<Jumbotron className="results-view">
						<Row>
							<Col xs className="league-rank">
								<Row>
									<p>5</p>
								</Row>

								<Row>
									<p>4</p>
								</Row>
							</Col>

							<Col xs={10} className="team-logo">
								<Row>
									<p>5</p>
								</Row>

								<Row>
									<p>4</p>
								</Row>
							</Col>

							<Col className="team-name"></Col>

							<Col className="team-record"></Col>

							<Col className="game-score"></Col>

							<Col className="match-result"></Col>

							<Col className="game-details-link"></Col>
						</Row>
						<Row className="press">
							<p className="text-muted">
								Fairbairn (HOU): Game-winning 28-yard FG in OT
							</p>
						</Row>
					</Jumbotron>
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
