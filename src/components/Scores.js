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
							<Col className="league-rank">
								<Row>
									<p>5</p>
								</Row>

								<Row>
									<p>4</p>
								</Row>
							</Col>

							<Col className="team-logo">
								<Row>
									<Image
										alt="Bills"
										src="/img/Bills.png"
										className="nfl-icon"
									/>
								</Row>

								<Row>
									<Image
										alt="Texans"
										src="/img/Texans.png"
										className="nfl-icon"
									/>
								</Row>
							</Col>

							<Col className="team-name">
								<Row>
									<p>Bills</p>
								</Row>

								<Row>
									<p>Texans</p>
								</Row>
							</Col>

							<Col className="team-record">
								<Row>
									<p className="text-muted w-l">(10-6)</p>
								</Row>

								<Row>
									<p className="text-muted w-l">(10-6)</p>
								</Row>
							</Col>

							<Col className="game-score">
								<Row>
									<p className="text-muted points">19</p>
								</Row>

								<Row>
									<p className="points">22</p>
								</Row>
							</Col>

							<Col className="match-result">
								<Row>
									<p className="result">FINAL</p>
								</Row>
							</Col>

							<Col className="game-details-link">
								<Row>
									<p className="detail-link">GAME DETAILS</p>
								</Row>
							</Col>
						</Row>
						<Row className="press">
							<p className="text-muted press-release">
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
