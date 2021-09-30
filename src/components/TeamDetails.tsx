import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { API_URL } from "../config/constants";

import { TeamWPlayer } from "../types/teamTypes";

export default function TeamDetails(props: TeamWPlayer) {
  const { id } = useParams<{ id: string }>();
  const initialState = {
    id: null,
    name: null,
    country: null,
    founded: null,
    titles: null,
    championsLeagueParticipant: null,
    players: [],
  };
  const [teamDetails, setTeamDetails] = useState<TeamWPlayer>(initialState);

  async function fetchTeam() {
    try {
      const response = await axios.get(`${API_URL}/teams/${id}`);
      setTeamDetails(response.data);
    } catch (error) {
      if (error instanceof Error) {
        console.log("Error:", error.message);
      }
    }
  }

  useEffect(() => {
    fetchTeam();
  }, []);

  return (
    <div
      style={{
        border: "5px solid grey",
        width: "60vw",
        margin: "20px auto",
        padding: 10,
      }}
    >
      <p>Team: {teamDetails.name}</p>
      {teamDetails.players.map((player) => {
        return (
          <div
            style={{
              border: "2px solid black",
              width: "80%",
              margin: "0 auto",
            }}
          >
            <p>Player: {player.name}</p>
            <p>Nationality: {player.nationality}</p>
            {player.retired ? <p>"Retired"</p> : null}
          </div>
        );
      })}
    </div>
  );
}
