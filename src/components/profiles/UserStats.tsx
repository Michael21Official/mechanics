import React from 'react';
import { UserStatsProps } from '../../types/types';
import SkillBar from './SkillBar';
import './UserStats.css'; // Import the CSS file for UserStats

function UserStats({ stats }: UserStatsProps) {
  return (
    <div className="user-stats">
      <h1>Skill</h1>
      <div className="skill-bars">
        <SkillBar label="PVP" value={stats.pvp} color="#ff7676" />
        <SkillBar label="Farming" value={stats.farming} color="#53e69d" />
        <SkillBar label="Victories" value={stats.victories} color="#ffe685" />
        <SkillBar label="Supporting" value={stats.supporting} color="#76b1ff" />
      </div>
      <div className="compare">
        <i className="fa fa-circle-thin" aria-hidden="true"></i>
        <span>Compare</span>
      </div>
    </div>
  );
}

export default UserStats;
