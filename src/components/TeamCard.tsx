import React from "react";

import { Team } from "../types/teamTypes";

export default function TeamCard(props: Team) {
  const { name, country, founded, titles, championsLeagueParticipant } = props;
  //   console.log("what are my props", props);
  return (
    <div style={{ border: "1px solid black", margin: "5px 10px" }}>
      <p>Name: {name}</p>
      <p>Country: {country}</p>
      <p>Founded: {founded}</p>
      <p>Titles: {titles}</p>
      <p>
        In the champions league: {championsLeagueParticipant ? "Yes" : "No"}
      </p>
    </div>
  );
}
