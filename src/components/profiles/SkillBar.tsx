// SkillBar.tsx
import React from 'react';
import { SkillBarProps } from '../../types/types';

function SkillBar({ label, value, color }: SkillBarProps) {
  return (
    <div className="skill-bar">
      <div className="skill-label">{label}</div>
      <div className="bar">
        <div className="progress" style={{ width: `${value}%`, background: color }}></div>
      </div>
    </div>
  );
}

export default SkillBar;
