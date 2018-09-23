import React from "react";
import "./Nav.css";

const Nav = props => (
    <nav>
        <ul>
            <li id="rw">{props.message}</li>

            <li id="score">Current Score: {props.score}</li>

            <li id="top-score">Top Score: {props.topScore}</li>
        </ul>
    </nav>
);

export default Nav;