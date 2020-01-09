import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import "./GameScores.css";
import IframeComm from "react-iframe-comm";

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
			<Container className="main-view" fluid>
				<Row className="game-view-title">
					<h2>Games - Wild Card Weekend</h2>
				</Row>
				<Row className="game-view-result">
					<h3>Final</h3>
				</Row>

				<Container className="iframe-container">
					<IframeComm
						className="iframe-component"
						attributes={attributes}
						postMessageData={postMessageData}
						handleReady={onReady}
						handleReceiveMessage={onReceiveMessage}
					/>
				</Container>
			</Container>
		);
	}
}
