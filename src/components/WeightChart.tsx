// src/components/WeightChart.tsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { startOfISOWeek, format } from 'date-fns';

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
  selectedExercise: string;
}

interface WeeklyData {
  week: string;
  weight: number;
}

function WeightChart({ logs, selectedExercise }: Props) {
  // 対象種目のログだけ抽出
  const filtered = logs.filter(log => log.exercise === selectedExercise);

  // 週ごとに集計（最大重量）
  const weeklyMap: { [week: string]: number[] } = {};

  filtered.forEach(log => {
    const weekStart = format(startOfISOWeek(new Date(log.date)), 'yyyy-MM-dd');
    if (!weeklyMap[weekStart]) {
      weeklyMap[weekStart] = [];
    }
    weeklyMap[weekStart].push(log.weight);
  });

  const data: WeeklyData[] = Object.entries(weeklyMap).map(([week, weights]) => ({
    week,
    weight: Math.max(...weights), // 平均にしたければ → weights.reduce(...) / weights.length
  }));

  return (
    <div style={{ width: '100%', height: 300 }}>
      <h3>{selectedExercise} の週ごとの重量推移</h3>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="weight" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WeightChart;
