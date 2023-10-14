// RecentMatches.tsx
import React from 'react';
import { Match } from '../../types/types';

interface RecentMatchesProps {
  matches: Match[];
}

function RecentMatches({ matches }: RecentMatchesProps) {
  return (
    <div className="bottom">
      <h1>Recent Matches</h1>
      <img className="setting" src="https://cdn-icons-png.flaticon.com/512/4036/4036398.png" alt="Settings Icon" />
      <table className="matches">
        <tr>
          <td className="wl win">Win</td>
          <td className="date">20/09/2017 19:35</td>
          <td className="time">24:19</td>
        </tr>
        {/* Wyświetl listę meczów na podstawie danych */}
        {matches.map((match, index) => (
          <tr key={index}>
            <td className={`wl ${match.result.toLowerCase()}`}>{match.result}</td>
            <td className="date">{match.date}</td>
            <td className="time">{match.time}</td>
          </tr>
        ))}
      </table>
      <span className="view-more">View more..</span>
    </div>
  );
}

export default RecentMatches;
