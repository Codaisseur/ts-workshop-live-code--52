import React, { useState, useEffect } from "react";
import axios from "axios";

import TeamCard from "./TeamCard";
import TeamDetails from "./TeamDetails";

import { API_URL } from "../config/constants";
import { Team, TeamWPlayer, Player } from "../types/teamTypes";

export default function TeamList() {
  // const [listOfTeams, setListOfTeams] = useState<Team[]>([]);
  const [team, setTeam] = useState<TeamWPlayer>({
    id: null,
    name: null,
    country: null,
    founded: null,
    titles: null,
    championsLeagueParticipant: null,
    players: [],
  });

  async function fetchTeams() {
    try {
      // const response = await axios.get(`${API_URL}/teams`);
      const responseTeam = await axios.get(`${API_URL}/teams/3`);
      // setListOfTeams(response.data);
      setTeam(responseTeam.data);
    } catch (error) {
      if (error instanceof Error) {
        console.log("Error:", error.message);
      }
    }
  }

  console.log("team", team);
  useEffect(() => {
    fetchTeams();
  }, []);

  // console.log("My list", listOfTeams);

  return (
    <div>
      {/* <div style={{ display: "flex" }}> */}
      {/* {listOfTeams.map((team) => {
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
      </div> */}
      <div>
        <TeamDetails
          id={team.id}
          name={team.name}
          country={team.country}
          founded={team.founded}
          titles={team.titles}
          championsLeagueParticipant={team.championsLeagueParticipant}
          players={team.players}
        />
      </div>
    </div>
  );
}
