import React from "react";
import { Link } from "react-router-dom";
import { Team } from "../types/teamTypes";

export default function TeamCard(props: Team) {
  const { id, name, country, founded, titles, championsLeagueParticipant } =
    props;
  //   console.log("what are my props", props);
  return (
    <div
      style={{
        border: "5px solid black",
        margin: "5px 10px",
        minWidth: "450px",
        background: "#a5d4c9",
        textDecoration: "none",
      }}
    >
      <p>Name: {name}</p>
      <p>Country: {country}</p>
      <p>Founded: {founded}</p>
      <p>Titles: {titles}</p>
      <p>
        In the champions league: {championsLeagueParticipant ? "Yes" : "No"}
      </p>
      <Link to={`/team/${id}`}>
        <button style={{ margin: "15px auto", fontSize: "1em" }}>
          Read more
        </button>
      </Link>
    </div>
  );
}
