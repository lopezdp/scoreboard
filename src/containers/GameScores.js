import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./GameScores.css";
import IframeComm from "react-iframe-comm";
import Media from "react-media";

export default class GameScores extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: false
		};
	}

	componentDidMount() {}

	render() {
		// the html attributes to create the iframe with
		// make sure you use camelCase attribute names
		const attributes = {
			src: "http://localhost:3000/scores",
			width: "100%",
			frameBorder: 1 // show frame border just for fun...
		};

		// the postMessage data you want to send to your iframe
		// it will be send after the iframe has loaded
		const postMessageData = "hello iframe";

		// parent received a message from iframe
		const onReceiveMessage = () => {
			console.log("onReceiveMessage");
		};

		// iframe has loaded
		const onReady = () => {
			console.log("onReady");
		};

		return (
			<div>
				<Media
					query="(max-width: 506px)"
					render={() => (
						<Container className="main-view" fluid>
							<Row className="game-view-title-sm">
								<h2>Games - Wild Card Weekend</h2>
							</Row>
							<Row className="game-view-result">
								<h3>Final</h3>
							</Row>

							<Container className="iframe-container-s">
								<IframeComm
									attributes={attributes}
									postMessageData={postMessageData}
									handleReady={onReady}
									handleReceiveMessage={onReceiveMessage}
								/>
							</Container>
						</Container>
					)}
				/>

				<Media
					query="(min-width: 507px) and (max-width: 666px)"
					render={() => (
						<Container className="main-view" fluid>
							<Row className="game-view-title">
								<h2>Games - Wild Card Weekend</h2>
							</Row>
							<Row className="game-view-result">
								<h3>Final</h3>
							</Row>

							<Container className="iframe-container-xs">
								<IframeComm
									attributes={attributes}
									postMessageData={postMessageData}
									handleReady={onReady}
									handleReceiveMessage={onReceiveMessage}
								/>
							</Container>
						</Container>
					)}
				/>

				<Media
					query="(min-width: 667px) and (max-width: 767px)"
					render={() => (
						<Container className="main-view" fluid>
							<Row className="game-view-title">
								<h2>Games - Wild Card Weekend</h2>
							</Row>
							<Row className="game-view-result">
								<h3>Final</h3>
							</Row>

							<Container className="iframe-container-sm">
								<IframeComm
									attributes={attributes}
									postMessageData={postMessageData}
									handleReady={onReady}
									handleReceiveMessage={onReceiveMessage}
								/>
							</Container>
						</Container>
					)}
				/>

				<Media
					query="(min-width: 768px) and (max-width: 979px)"
					render={() => (
						<Container className="main-view" fluid>
							<Row className="game-view-title">
								<h2>Games - Wild Card Weekend</h2>
							</Row>
							<Row className="game-view-result">
								<h3>Final</h3>
							</Row>

							<Container className="iframe-container-md">
								<IframeComm
									attributes={attributes}
									postMessageData={postMessageData}
									handleReady={onReady}
									handleReceiveMessage={onReceiveMessage}
								/>
							</Container>
						</Container>
					)}
				/>

				<Media
					query="(min-width: 980px) and (max-width: 1239px)"
					render={() => (
						<Container className="main-view" fluid>
							<Row className="game-view-title">
								<h2>Games - Wild Card Weekend</h2>
							</Row>
							<Row className="game-view-result">
								<h3>Final</h3>
							</Row>

							<Container className="iframe-container-lg">
								<IframeComm
									attributes={attributes}
									postMessageData={postMessageData}
									handleReady={onReady}
									handleReceiveMessage={onReceiveMessage}
								/>
							</Container>
						</Container>
					)}
				/>

				<Media
					query="(min-width: 1240px)"
					render={() => (
						<Container className="main-view" fluid>
							<Row className="game-view-title">
								<h2>Games - Wild Card Weekend</h2>
							</Row>
							<Row className="game-view-result">
								<h3>Final</h3>
							</Row>

							<Container className="iframe-container">
								<IframeComm
									attributes={attributes}
									postMessageData={postMessageData}
									handleReady={onReady}
									handleReceiveMessage={onReceiveMessage}
								/>
							</Container>
						</Container>
					)}
				/>
			</div>
		);
	}
}
