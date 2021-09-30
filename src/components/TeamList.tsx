import React, { useState, useEffect } from "react";
import axios from "axios";

import TeamCard from "./TeamCard";
import TeamDetails from "./TeamDetails";

import { API_URL } from "../config/constants";
import { Team, TeamWPlayer, Player } from "../types/teamTypes";

export default function TeamList() {
  const [listOfTeams, setListOfTeams] = useState<Team[]>([]);

  async function fetchTeams() {
    try {
      const response = await axios.get(`${API_URL}/teams`);
      setListOfTeams(response.data);
    } catch (error) {
      if (error instanceof Error) {
        console.log("Error:", error.message);
      }
    }
  }

  // console.log("team", team);
  useEffect(() => {
    fetchTeams();
  }, []);

  // console.log("My list", listOfTeams);

  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "90vw",
          flexWrap: "wrap",
          justifyContent: "space-between",
          margin: "0 auto",
        }}
      >
        {listOfTeams.map((team) => {
          const {
            id,
            name,
            country,
            founded,
            titles,
            championsLeagueParticipant,
          } = team;
          return (
            <TeamCard
              key={id}
              id={id}
              name={name}
              country={country}
              founded={founded}
              titles={titles}
              championsLeagueParticipant={championsLeagueParticipant}
            />
          );
        })}
      </div>
    </div>
  );
}
