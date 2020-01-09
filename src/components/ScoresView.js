import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Media from "react-media";
import Scores from "./Scores";
import "./Scores.css";
import Image from "react-bootstrap/Image";

export default class ScoresView extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: false
		};
	}

	render() {
		return (
			<Container>
				<Scores
					rank1="5"
					rank2="4"
					logo1="/img/Bills.png"
					logo2="/img/Texans.png"
					teamName1="Bills"
					teamName2="Texans"
					teamRecord1="(10-6)"
					teamRecord2="(10-6)"
					teamScore1="19"
					teamScore2="22"
					koh1="false"
					koh2="true"
					gameStatus="FINAL"
					resultMsg="Fairbairn (HOU): Game-winning 28-yard FG in OT"
				/>
				<Scores
					rank1="6"
					rank2="3"
					logo1="/img/Titans.png"
					logo2="/img/Patriots.png"
					teamName1="Titans"
					teamName2="Patriots"
					teamRecord1="(9-7)"
					teamRecord2="(12-4)"
					teamScore1="20"
					teamScore2="13"
					koh1="true"
					koh2="false"
					gameStatus="FINAL"
					resultMsg="Patriots: First homeplayoff loss since 2012 AFC Championship"
				/>
				<Scores
					rank1="6"
					rank2="3"
					logo1="/img/Vikings.png"
					logo2="/img/Saints.png"
					teamName1="Vikings"
					teamName2="Saints"
					teamRecord1="(10-6)"
					teamRecord2="(13-3)"
					teamScore1="26"
					teamScore2="20"
					koh1="true"
					koh2="false"
					gameStatus="FINAL"
					resultMsg="Vikings: First playoff OT win in franchise history"
				/>
				<Scores
					rank1="5"
					rank2="4"
					logo1="/img/Seahawks.png"
					logo2="/img/Eagles.png"
					teamName1="Seahawks"
					teamName2="Eagles"
					teamRecord1="(11-5)"
					teamRecord2="(9-7)"
					teamScore1="17"
					teamScore2="9"
					koh1="true"
					koh2="false"
					gameStatus="FINAL"
					resultMsg="DK Metcalf: 160 rec yds (SEA postseason rookie record)"
				/>
			</Container>
		);
	}
}
