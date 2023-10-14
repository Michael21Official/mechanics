// UserStats.tsx
import React from 'react';
import { UserStatsProps } from '../../types/types';
import SkillBar from './SkillBar';

function UserStats({ stats }: UserStatsProps) {
  return (
    <div className="stats">
      <h1>Skill</h1>
      <SkillBar label="PVP" value={stats.pvp} color="#ff7676" />
      <SkillBar label="Farming" value={stats.farming} color="#53e69d" />
      <SkillBar label="Victories" value={stats.victories} color="#ffe685" />
      <SkillBar label="Supporting" value={stats.supporting} color="#76b1ff" />
      <i className="fa fa-circle-thin" aria-hidden="true">
        <span>Compare</span>
      </i>
    </div>
  );
}

export default UserStats;
