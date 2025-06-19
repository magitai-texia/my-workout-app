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
  title?: string;
  limit?: number;
  onDelete?: (id: string) => void;
}

function TrainingLogList({ logs, title = "トレーニングログ", limit, onDelete }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const reversedLogs = [...logs].reverse();
  const displayedLogs = limit ? reversedLogs.slice(0, limit) : reversedLogs;

  return (
    <div className="training-log-list accordion">
      <h2 onClick={() => setIsOpen(!isOpen)} className="accordion-title ">
        {title} {isOpen ? "▲" : "▼"}
      </h2>

      {isOpen && (
        <ul className="accordion-content">
          {displayedLogs.map((log) => (
            <li key={log.id}>
              <span className="log-date">{log.date}</span> -
              <span className="log-exercise">{log.exercise}</span>:
              <span className="log-details">
                 {log.reps}回 x {log.sets}セット（{log.weight}kg）
              </span>
              {onDelete && (
                <button
                  className="delete-button"
                  onClick={() => onDelete(log.id)}
                >
                  🗑️
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TrainingLogList;
