import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Media from "react-media";
import "./Scores.css";
import Image from "react-bootstrap/Image";

export default class Scores extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cls1: "",
			cls2: ""
		};
	}

	componentDidMount() {
		// Determine className for scores when component mounts
		this.selectClassNaming();
	}

	/*
	 * Selects the appropriate class for the scoring
	 * displays text-muted Bootstrap styling for
	 * Loser based on props passed from parent.
	 *
	 * The function will set the state used for the
	 * className when called on Mount.
	 *
	 * selectClassNaming
	 *
	 */
	selectClassNaming = () => {
		if (this.props.koh1 === "false" && this.props.koh2 === "true") {
			this.setState({
				cls1: "text-muted points",
				cls2: "points"
			});
		} else {
			this.setState({
				cls2: "text-muted points",
				cls1: "points"
			});
		}
	};

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
												<p>{this.props.rank1}</p>
											</Row>

											<Row>
												<p>{this.props.rank2}</p>
											</Row>
										</Col>

										<Col className="team-logo">
											<Row>
												<Image
													alt="NFL Logo"
													src={this.props.logo1}
													className="nfl-icon"
												/>
											</Row>

											<Row>
												<Image
													alt="NFL Logo"
													src={this.props.logo2}
													className="nfl-icon"
												/>
											</Row>
										</Col>

										<Col className="team-name-xs">
											<Row>
												<p>{this.props.teamName1}</p>
											</Row>

											<Row>
												<p>{this.props.teamName2}</p>
											</Row>
										</Col>

										<Col className="team-record">
											<Row>
												<p className="text-muted w-l">
													{this.props.teamRecord1}
												</p>
											</Row>

											<Row>
												<p className="text-muted w-l">
													{this.props.teamRecord2}
												</p>
											</Row>
										</Col>

										<Col className="game-score">
											<Row>
												<p
													className={`${this.state.cls1}`}
												>
													{this.props.teamScore1}
												</p>
											</Row>

											<Row>
												<p
													className={`${this.state.cls2}`}
												>
													{this.props.teamScore2}
												</p>
											</Row>
										</Col>
									</Row>
									<Row>
										<Col className="match-result-sm">
											<Row>
												<p className="result">
													{this.props.gameStatus}
												</p>
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
											{this.props.resultMsg}
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
												<p>{this.props.rank1}</p>
											</Row>

											<Row>
												<p>{this.props.rank2}</p>
											</Row>
										</Col>

										<Col className="team-logo">
											<Row>
												<Image
													alt="NFL Logo"
													src={this.props.logo1}
													className="nfl-icon"
												/>
											</Row>

											<Row>
												<Image
													alt="NFL Logo"
													src={this.props.logo2}
													className="nfl-icon"
												/>
											</Row>
										</Col>

										<Col className="team-name-sm">
											<Row>
												<p>{this.props.teamName1}</p>
											</Row>

											<Row>
												<p>{this.props.teamName2}</p>
											</Row>
										</Col>

										<Col className="team-record">
											<Row>
												<p className="text-muted w-l">
													{this.props.teamRecord1}
												</p>
											</Row>

											<Row>
												<p className="text-muted w-l">
													{this.props.teamRecord2}
												</p>
											</Row>
										</Col>

										<Col className="game-score">
											<Row>
												<p
													className={`${this.state.cls1}`}
												>
													{this.props.teamScore1}
												</p>
											</Row>

											<Row>
												<p
													className={`${this.state.cls2}`}
												>
													{this.props.teamScore2}
												</p>
											</Row>
										</Col>

										<Col className="match-result-sm">
											<Row>
												<p className="result">
													{this.props.gameStatus}
												</p>
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
											{this.props.resultMsg}
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
												<p>{this.props.rank1}</p>
											</Row>

											<Row>
												<p>{this.props.rank2}</p>
											</Row>
										</Col>

										<Col className="team-logo">
											<Row>
												<Image
													alt="NFL Logo"
													src={this.props.logo1}
													className="nfl-icon"
												/>
											</Row>

											<Row>
												<Image
													alt="NFL Logo"
													src={this.props.logo2}
													className="nfl-icon"
												/>
											</Row>
										</Col>

										<Col className="team-name-md">
											<Row>
												<p>{this.props.teamName1}</p>
											</Row>

											<Row>
												<p>{this.props.teamName2}</p>
											</Row>
										</Col>

										<Col className="team-record">
											<Row>
												<p className="text-muted w-l">
													{this.props.teamRecord1}
												</p>
											</Row>

											<Row>
												<p className="text-muted w-l">
													{this.props.teamRecord2}
												</p>
											</Row>
										</Col>

										<Col className="game-score">
											<Row>
												<p
													className={`${this.state.cls1}`}
												>
													{this.props.teamScore1}
												</p>
											</Row>

											<Row>
												<p
													className={`${this.state.cls2}`}
												>
													{this.props.teamScore2}
												</p>
											</Row>
										</Col>

										<Col className="match-result">
											<Row>
												<p className="result">
													{this.props.gameStatus}
												</p>
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
											{this.props.resultMsg}
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
												<p>{this.props.rank1}</p>
											</Row>

											<Row>
												<p>{this.props.rank2}</p>
											</Row>
										</Col>

										<Col className="team-logo">
											<Row>
												<Image
													alt="NFL Logo"
													src={this.props.logo1}
													className="nfl-icon"
												/>
											</Row>

											<Row>
												<Image
													alt="NFL Logo"
													src={this.props.logo2}
													className="nfl-icon"
												/>
											</Row>
										</Col>

										<Col className="team-name">
											<Row>
												<p>{this.props.teamName1}</p>
											</Row>

											<Row>
												<p>{this.props.teamName2}</p>
											</Row>
										</Col>

										<Col className="team-record">
											<Row>
												<p className="text-muted w-l">
													{this.props.teamRecord1}
												</p>
											</Row>

											<Row>
												<p className="text-muted w-l">
													{this.props.teamRecord2}
												</p>
											</Row>
										</Col>

										<Col className="game-score">
											<Row>
												<p
													className={`${this.state.cls1}`}
												>
													{this.props.teamScore1}
												</p>
											</Row>

											<Row>
												<p
													className={`${this.state.cls2}`}
												>
													{this.props.teamScore2}
												</p>
											</Row>
										</Col>

										<Col className="match-result">
											<Row>
												<p className="result">
													{this.props.gameStatus}
												</p>
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
											{this.props.resultMsg}
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
