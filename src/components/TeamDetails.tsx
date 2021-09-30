import React from "react";
import { Team, TeamWPlayer, Player } from "../types/teamTypes";

type TeamPlayer = Team & { players: Player };

export default function TeamDetails(props: TeamWPlayer) {
  const {
    id,
    name,
    country,
    founded,
    titles,
    championsLeagueParticipant,
    players,
  } = props;
  return (
    <div>
      <p>Name: {name}</p>
      <div>
        {players.map((player) => {
          return <p>Player: {player.name}</p>;
        })}
      </div>
    </div>
  );
}
