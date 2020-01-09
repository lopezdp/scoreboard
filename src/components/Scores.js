import React, { Component } from "react";
//import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
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
			<div>
				<Media
					query="(max-width: 567px)"
					render={() => (
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

										<Col className="team-name-xs">
											<Row>
												<p>Bills</p>
											</Row>

											<Row>
												<p>Texans</p>
											</Row>
										</Col>

										<Col className="team-record">
											<Row>
												<p className="text-muted w-l">
													(10-6)
												</p>
											</Row>

											<Row>
												<p className="text-muted w-l">
													(10-6)
												</p>
											</Row>
										</Col>

										<Col className="game-score">
											<Row>
												<p className="text-muted points">
													19
												</p>
											</Row>

											<Row>
												<p className="points">22</p>
											</Row>
										</Col>
									</Row>
									<Row>
										<Col className="match-result-sm">
											<Row>
												<p className="result">FINAL</p>
											</Row>
										</Col>

										<Col className="game-details-link-sm">
											<Row>
												<Link
													to="/game-detail"
													className="detail-link-sm"
													onClick={void 0}
													onTouchStart={() => ""}
												>
													<p>GAME DETAILS</p>

													<Image
														alt="Arrow"
														src="/img/arrowIcon.png"
														className="arrow-icon-sm"
													/>
												</Link>
											</Row>
										</Col>
									</Row>
									<Row className="press">
										<p className="text-muted press-release">
											Fairbairn (HOU): Game-winning
											28-yard FG in OT
										</p>
									</Row>
								</Jumbotron>
							</Row>
						</Container>
					)}
				/>

				<Media
					query="(min-width: 568px) and (max-width: 666px)"
					render={() => (
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

										<Col className="team-name-sm">
											<Row>
												<p>Bills</p>
											</Row>

											<Row>
												<p>Texans</p>
											</Row>
										</Col>

										<Col className="team-record">
											<Row>
												<p className="text-muted w-l">
													(10-6)
												</p>
											</Row>

											<Row>
												<p className="text-muted w-l">
													(10-6)
												</p>
											</Row>
										</Col>

										<Col className="game-score">
											<Row>
												<p className="text-muted points">
													19
												</p>
											</Row>

											<Row>
												<p className="points">22</p>
											</Row>
										</Col>

										<Col className="match-result-sm">
											<Row>
												<p className="result">FINAL</p>
											</Row>
										</Col>

										<Col className="game-details-link-sm">
											<Row>
												<Link
													to="/game-detail"
													className="detail-link-sm"
													onClick={void 0}
													onTouchStart={() => ""}
												>
													<p>GAME DETAILS</p>

													<Image
														alt="Arrow"
														src="/img/arrowIcon.png"
														className="arrow-icon-sm"
													/>
												</Link>
											</Row>
										</Col>
									</Row>
									<Row className="press">
										<p className="text-muted press-release">
											Fairbairn (HOU): Game-winning
											28-yard FG in OT
										</p>
									</Row>
								</Jumbotron>
							</Row>
						</Container>
					)}
				/>

				<Media
					query="(min-width: 667px) and (max-width: 781px)"
					render={() => (
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

										<Col className="team-name-md">
											<Row>
												<p>Bills</p>
											</Row>

											<Row>
												<p>Texans</p>
											</Row>
										</Col>

										<Col className="team-record">
											<Row>
												<p className="text-muted w-l">
													(10-6)
												</p>
											</Row>

											<Row>
												<p className="text-muted w-l">
													(10-6)
												</p>
											</Row>
										</Col>

										<Col className="game-score">
											<Row>
												<p className="text-muted points">
													19
												</p>
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
												<Link
													to="/game-detail"
													className="detail-link"
													onClick={void 0}
													onTouchStart={() => ""}
												>
													<p>GAME DETAILS</p>

													<Image
														alt="Arrow"
														src="/img/arrowIcon.png"
														className="arrow-icon"
													/>
												</Link>
											</Row>
										</Col>
									</Row>
									<Row className="press">
										<p className="text-muted press-release">
											Fairbairn (HOU): Game-winning
											28-yard FG in OT
										</p>
									</Row>
								</Jumbotron>
							</Row>
						</Container>
					)}
				/>

				<Media
					query="(min-width: 782px)"
					render={() => (
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
												<p className="text-muted w-l">
													(10-6)
												</p>
											</Row>

											<Row>
												<p className="text-muted w-l">
													(10-6)
												</p>
											</Row>
										</Col>

										<Col className="game-score">
											<Row>
												<p className="text-muted points">
													19
												</p>
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
												<Link
													to="/game-detail"
													className="detail-link"
													onClick={void 0}
													onTouchStart={() => ""}
												>
													<p>GAME DETAILS</p>

													<Image
														alt="Arrow"
														src="/img/arrowIcon.png"
														className="arrow-icon"
													/>
												</Link>
											</Row>
										</Col>
									</Row>
									<Row className="press">
										<p className="text-muted press-release">
											Fairbairn (HOU): Game-winning
											28-yard FG in OT
										</p>
									</Row>
								</Jumbotron>
							</Row>
						</Container>
					)}
				/>
			</div>
		);
	}
}
