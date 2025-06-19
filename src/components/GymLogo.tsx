// src/components/GymLogo.tsx

export default function GymLogo() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: 'block',
        margin: '0 auto',
      }}
    >
      {/* メインバー */}
      <rect x="16" y="30" width="32" height="4" fill="#CC0000" rx="2" />
      
      {/* 左ウェイト */}
      <rect x="6" y="26" width="6" height="12" fill="#444" rx="1" />
      <rect x="12" y="26" width="4" height="12" fill="#666" rx="1" />
      
      {/* 右ウェイト */}
      <rect x="52" y="26" width="4" height="12" fill="#666" rx="1" />
      <rect x="56" y="26" width="6" height="12" fill="#444" rx="1" />
    </svg>
  );
}

