import React, { memo } from 'react';

const NetworkIcon: React.FC<{ className?: string }> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" {...props}>
    <defs>
      <linearGradient id="a" x1="64%" y1="100%" x2="64%">
        <stop stopColor="#FFF" offset="0%" stopOpacity={0.5} />
        <stop stopColor="#F2F3F5" offset="100%" />
      </linearGradient>
      <linearGradient id="c" x1="50%" x2="50%" y2="84%">
        <stop stopColor="#EBEDF0" offset="0%" />
        <stop stopColor="#DCDEE0" offset="100%" stopOpacity={0} />
      </linearGradient>
      <linearGradient id="d" x1="100%" x2="100%" y2="100%">
        <stop stopColor="#EAEDF0" offset="0%" />
        <stop stopColor="#DCDEE0" offset="100%" />
      </linearGradient>
      <radialGradient
        id="b"
        cx="50%"
        cy="0%"
        fx="50%"
        fy="0%"
        r="100%"
        gradientTransform="matrix(0 1 -.54 0 .5 -.5)"
      >
        <stop stopColor="#EBEDF0" offset="0%" />
        <stop stopColor="#FFF" offset="100%" stopOpacity={0} />
      </radialGradient>
    </defs>
    <g fill="none">
      <g opacity={0.8} fill="url(#a)">
        <path d="M36 131V53H16v20H2v58h34zM123 15h22v14h9v77h-31V15z" />
      </g>
      <path fill="url(#b)" d="M0 139h160v21H0z" />
      <path
        d="M80 54a7 7 0 0 1 3 13v27l-2 2h-2a2 2 0 0 1-2-2V67a7 7 0 0 1 3-13z"
        fill="url(#c)"
      />
      <g opacity={0.6} strokeLinecap="round" strokeWidth={7} stroke="url(#d)">
        <path d="M64 47a19 19 0 0 0-5 13c0 5 2 10 5 13M53 36a34 34 0 0 0 0 48M95 73a19 19 0 0 0 6-13c0-5-2-9-6-13M106 84a34 34 0 0 0 0-48" />
      </g>
      <g transform="translate(31 105)">
        <rect fill="#EBEDF0" width={98} height={34} rx={2} />
        <rect fill="#FFF" x={9} y={8} width={80} height={18} rx={1.1} />
        <rect fill="#EBEDF0" x={15} y={12} width={18} height={6} rx={1.1} />
      </g>
    </g>
  </svg>
);

export default memo(NetworkIcon);
