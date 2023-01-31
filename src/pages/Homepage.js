import { useState } from "react";
import useAuthContext from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";
import bigSnake from "../images/bigSnake.png";

const Homepage = () => {
    // To be replaced with values from context.
    const { user, scores } = useAuthContext();
    const navigate = useNavigate();
    console.log("User: ", user);
    console.log("Scores: ", scores);

    return (
        <>
            {user && (
                <div className="header">
                    <div className="scoreboard">
                        <h3>My Scoreboard</h3>
                        <ul>
                            {scores &&
                                scores.map((ele, index) => (
                                    <li key={index}>{ele.score}</li>
                                ))}
                        </ul>
                    </div>
                </div>
            )}
            <div className="Homepage-container">
                <div className="leftBox">
                    <div className="leftBoxTexts">
                        <span>The</span>
                        <h1> Dragon Snake </h1>
                        <h2>Find out who is the best player!</h2>
                        <p>
                            {" "}
                            Use the arrow keys to move the Dragon Snake around
                            the board. Collect as many coins as possible and win
                            prizes
                        </p>
                        <div className="start_game  ">
                            <button
                                className="playBut1 mr-15"
                                onClick={() => navigate("/gamepage")}
                            >
                                Multiplayer
                            </button>
                            <button
                                className="playBut1"
                                onClick={() => navigate("/sp_gamepage")}
                            >
                                Singleplayer
                            </button>
                        </div>
                    </div>
                </div>

                <div className="rightBox">
                    <img src={bigSnake} className="bigSnakePic" />
                </div>
            </div>{" "}
            {/* //Homepage-container */}
            {/* <div className="main"></div>
                    <div>
                    </div> */}
            {/* <div className="footer"> */}
            {/* </div> */}
            <div
                className="footer"
                style={{
                    position: "relative",
                    left: "0",
                    bottom: "0",
                    width: "100%",
                    backgroundColor: "black",
                    color: "white",
                    textAlign: "center",
                }}
            >
                <p className="CreatedBy">
                    Created by: Avraham Schochet, Dahvid NessAiver, Alon
                    Kerklies, Yair Rosenschein & Zachary Ebenfeld
                </p>
            </div>
        </>
    );
};

export default Homepage;
