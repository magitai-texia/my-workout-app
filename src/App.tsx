// src/App.tsx
import React, { useState, useEffect } from 'react';
import './App.css'; 
import StatusBar from './components/StatusBar'; 
import TrainingInputForm from './components/TrainingInputForm'; 
import TrainingLogList from './components/TrainingLogList'; 
import GymLogo from './components/GymLogo';

// 筋トレ記録の型を定義
interface TrainingLog {
  id: string; // 記録を一意に識別するID
  date: string; // 記録日
  exercise: string; // 種目名
  reps: number; // 回数
  sets: number; // セット数
  // 必要であれば weight（重量）なども追加
}

// レベルアップに必要な経験値テーブル (例)
const getExpForLevel = (level: number) => 100 * Math.pow(2, level - 1);

function App() {
  // --- 状態定義 ---
  // useState<型>(初期値) の形で定義します
  // () => { ... } は初回読み込み時にLocalStorageから値を取得する処理
  const [showLevelUpModal, setShowLevelUpModal] = useState(false);

  const [level, setLevel] = useState<number>(() => {
    const savedLevel = localStorage.getItem('level'); // LocalStorageから読み込み試行
    return savedLevel ? parseInt(savedLevel, 10) : 1; // あれば数値に変換、なければ初期値1
  });

  const [experience, setExperience] = useState<number>(() => {
    const savedExp = localStorage.getItem('experience');
    return savedExp ? parseInt(savedExp, 10) : 0; // なければ初期値0
  });

  const [trainings, setTrainings] = useState<TrainingLog[]>(() => {
    const savedTrainings = localStorage.getItem('trainings');
    return savedTrainings ? JSON.parse(savedTrainings) : []; // なければ空の配列
  });

  // --- LocalStorageへの保存処理 ---
  // useEffectは、[ ] 内の変数が変化した"後"に実行されるフック
  useEffect(() => {
    localStorage.setItem('level', level.toString()); // levelが変化したら保存
  }, [level]);

  useEffect(() => {
    localStorage.setItem('experience', experience.toString()); // experienceが変化したら保存
  }, [experience]);

  useEffect(() => {
    localStorage.setItem('trainings', JSON.stringify(trainings)); // trainingsが変化したら保存 (配列はJSON文字列に変換)
  }, [trainings]);


  // --- 新しいトレーニング記録を追加する関数 ---
  // (この関数は TrainingInputForm から呼び出される)
  const handleAddTraining = (newTrainingData: Omit<TrainingLog, 'id' | 'date'>) => {
    // 新しい記録オブジェクトを作成
    const newLog: TrainingLog = {
      ...newTrainingData,
      id: crypto.randomUUID(), // ユニークなIDを自動生成
      date: new Date().toISOString().split('T')[0], // 今日の日付 (YYYY-MM-DD形式)
    };

    // 記録リストを更新 (元のリストに新しい記録を追加)
    setTrainings(prevLogs => [...prevLogs, newLog]);

    // --- 経験値計算 ---
    // ここでは簡単な計算例: 回数 * セット数 * 1 EXP
    const earnedExp = newLog.reps * newLog.sets * 2;
    let currentExp = experience + earnedExp; // 現在の経験値に加算
    let currentLevel = level;
    let requiredExp = getExpForLevel(currentLevel);

    // --- レベルアップ処理 ---
    // 必要な経験値を超えている間、ループしてレベルアップ
    while (currentExp >= requiredExp) {
      currentLevel++; // レベルを1上げる
      currentExp -= requiredExp; // レベルアップに必要な経験値を引く
      requiredExp = getExpForLevel(currentLevel);
      console.log(`レベルアップ！ Level ${currentLevel} になりました！`); // コンソールに表示（実際は画面に通知など）
    }
    // ✅ レベルが上がったときだけモーダル表示
    if (currentLevel > level) {
      setShowLevelUpModal(true);
      setTimeout(() => {
        setShowLevelUpModal(false);
      }, 3000);
    }

    // 計算後のレベルと経験値をセット
    setLevel(currentLevel);
    setExperience(currentExp);
  };

  // 次のレベルに必要な経験値を取得
  const nextLevelExp = getExpForLevel(level);


  // --- 画面に表示する内容 ---
  return (
    <div className="App">
      <GymLogo />
      <h1>Work Out Memo</h1>

      {/* 後で作成するコンポーネントを配置 */}
      { <StatusBar level={level} experience={experience} nextLevelExp={nextLevelExp} /> }
      { <TrainingInputForm onAddTraining={handleAddTraining} /> }

      { <TrainingLogList title="トレーニングログ" limit={5} logs={trainings} /> }
      {<TrainingLogList title="記録ログ" limit={10} logs={trainings} />}
        
      {showLevelUpModal && (
        <div className="level-up-modal" onClick={() => setShowLevelUpModal(false)}>
          <div className="modal-content">
            <h2>🎉 LEVEL UP!</h2>
            <p>レベル {level} に到達しました！</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;