import { useState } from 'react';
import './TrainingLogList.css';

interface TrainingLog {
  id: string;
  date: string;
  exercise: string;
  weight: number;
  reps: number;
  sets: number;
}

interface Props {
  logs: TrainingLog[];
  onDelete: (id: string) => void;
  title?: string;
}

const DailyLogList = ({ logs, onDelete, title }: Props) => {
  const [openDates, setOpenDates] = useState<{ [date: string]: boolean }>({});

  const grouped = logs.reduce((acc: Record<string, TrainingLog[]>, log) => {
    if (!acc[log.date]) acc[log.date] = [];
    acc[log.date].push(log);
    return acc;
  }, {});

  return (
    <div className="daily-log-list">
      {title && <h2 className="accordion-title">{title}</h2>} {/* サブタイトル表示 */}

      {Object.entries(grouped)
        .sort((a, b) => (a[0] < b[0] ? 1 : -1)) /* 日付で新しい順にソート */
        .map(([date, dailyLogs]) => (
          <div key={date} className="accordion">
            <h3
              className="accordion-title"
              onClick={() =>
                setOpenDates((prev) => ({ ...prev, [date]: !prev[date] }))
              }
            >
              {date} {openDates[date] ? '▲' : '▼'}
            </h3>
            {openDates[date] && (
              <ul className="accordion-content">
                {dailyLogs.map((log) => (
                  <li key={log.id} className="log-item">
                    <span className="log-exercise">{log.exercise}</span>:
                    <span className="log-details">
                      {log.reps}回 × {log.sets}セット（{log.weight}kg）
                    </span>
                    <button
                      className="delete-button"
                      onClick={() => onDelete(log.id)}
                      aria-label="Delete log"
                    >
                      🗑️
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
    </div>
  );
};

export default DailyLogList;
