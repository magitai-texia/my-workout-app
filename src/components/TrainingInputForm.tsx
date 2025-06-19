import React, { useState } from 'react';
import './TrainingInputForm.css'; // 後でスタイルを作成

interface Props {
  // App.tsx から渡される、記録追加用の関数
  onAddTraining: (data: { exercise: string; weight: number; reps: number; sets: number }) => void;
}

function TrainingInputForm({ onAddTraining }: Props) {
  const [exercise, setExercise] = useState('');
  const [weight, setWeight] = useState(''); // 入力は文字列で受け取る
  const [reps, setReps] = useState(''); // 入力は文字列で受け取る
  const [sets, setSets] = useState(''); // 入力は文字列で受け取る

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // フォーム送信時のページリロードを防ぐ

    // 入力値を数値に変換
    const weightNum = parseInt(weight, 10);
    const repsNum = parseInt(reps, 10);
    const setsNum = parseInt(sets, 10);
    

    // 簡単な入力チェック
    if (!exercise || isNaN(repsNum) || isNaN(setsNum) || isNaN(weightNum) || weightNum < 0 || repsNum <= 0 ||  setsNum <= 0 ) {
      alert('種目名、重量、回数、セット数を正しく入力してください。');
      return; // 処理を中断
    }

    // App.tsx の handleAddTraining 関数を呼び出し、入力データを渡す
    onAddTraining({ exercise, weight: weightNum, reps: repsNum,  sets: setsNum,});

    // 入力フォームをクリア
    setExercise('');
    setWeight('');
    setReps('');
    setSets('');
  };

  return (
    <form className="training-input-form" onSubmit={handleSubmit}>
      <h2>トレーニング記録</h2>
      <div>
        <label htmlFor="exercise">種目:</label>
        <input
          type="text"
          id="exercise"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)} // 入力されるたびに state を更新
          required // HTML5 の入力必須バリデーション
        />
      </div>
      <div>
      <label htmlFor="weight">重量 (kg):</label>
      <input
        type="number"
        id="weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        required
        min="0"
      />
      </div>
      <div>
        <label htmlFor="reps">回数:</label>
        <input
          type="number" // 数値入力用のフィールド
          id="reps"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          required
          min="1" // HTML5 の最小値バリデーション
        />
      </div>
      <div>
        <label htmlFor="sets">セット数:</label>
        <input
          type="number"
          id="sets"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
          required
          min="1"
        />
      </div>
      <button type="submit">トレーニングを記録する</button>
    </form>
  );
}

export default TrainingInputForm;
