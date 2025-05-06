import React from 'react';
import './TrainingLogList.css'; // 後でスタイルを作成

// App.tsxで定義したTrainingLog型をインポート（またはここで再定義）
interface TrainingLog {
  id: string;
  date: string;
  exercise: string;
  reps: number;
  sets: number;
}

interface Props {
  logs: TrainingLog[]; // App.tsx から渡される記録の配列
}

function TrainingLogList({ logs }: Props) {
  if (logs.length === 0) {
    return <p>まだ記録がありません。</p>;
  }

  // 新しい記録が上に表示されるように逆順にする
  const reversedLogs = [...logs].reverse();

  return (
    <div className="training-log-list">
      <h2>トレーニングログ</h2>
      <ul>
        {/* 配列の map メソッドで各記録をリスト項目(li)に変換して表示 */}
        {reversedLogs.map((log) => (
          <li key={log.id}> {/* key はReactがリスト項目を識別するために必要 */}
            <span className="log-date">{log.date}</span> -{' '}
            <span className="log-exercise">{log.exercise}</span>:{' '}
            <span className="log-details">{log.reps}回 x {log.sets}セット</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrainingLogList;