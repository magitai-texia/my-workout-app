import React from 'react';
import './StatusBar.css'; // 後でスタイルを作成

interface Props {
  level: number;
  experience: number;
  nextLevelExp: number;
}

function StatusBar({ level, experience, nextLevelExp }: Props) {
  // 経験値バーの進捗率を計算 (0除算を避ける)
  const progress = nextLevelExp > 0 ? (experience / nextLevelExp) * 100 : 0;

  return (
    <div className="status-bar">
      <div className="level">Level: {level}</div>
      <div className="experience">
        <div className="exp-label">EXP: {experience} / {nextLevelExp}</div>
        <div className="exp-bar-container">
          <div
            className="exp-bar-fill"
            style={{ width: `${progress}%` }} // 計算した進捗率を適用
          ></div>
        </div>
      </div>
    </div>
  );
}

export default StatusBar;