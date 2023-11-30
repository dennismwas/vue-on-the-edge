<template>
  <svg class="card" viewBox="0 50 840 440">
    <defs>
      <linearGradient id="gradient-1" gradientUnits="userSpaceOnUse" x1="420" y1="275" x2="420" y2="167"
        gradientTransform="matrix(1 0 0 -1 0 442)">
        <stop offset="0.464" style="stop-opacity: 0.2"></stop>
        <stop offset="0.9" style="stop-opacity: 0"></stop>
      </linearGradient>
      <linearGradient id="gradient-2" gradientUnits="userSpaceOnUse" x1="420" y1="325" x2="420" y2="117.001"
        gradientTransform="matrix(1 0 0 -1 0 442)">
        <stop offset="0.464" style="stop-opacity: 0.2"></stop>
        <stop offset="1" style="stop-opacity: 0"></stop>
      </linearGradient>
      <linearGradient id="gradient-3" gradientUnits="userSpaceOnUse" x1="420" y1="382" x2="420" y2="60.001"
        gradientTransform="matrix(1 0 0 -1 0 442)">
        <stop offset="0.464" style="stop-opacity: 0.16"></stop>
        <stop offset="0.9" style="stop-opacity: 0"></stop>
      </linearGradient>
      <linearGradient id="gradient-4" gradientUnits="userSpaceOnUse" x1="420" y1="488.788" x2="420" y2="-46.967"
        gradientTransform="matrix(1 0 0 -1 0 442)">
        <stop offset="0.089" style="stop-opacity: 0.1"></stop>
        <stop offset="0.464" style="stop-opacity: 0.27"></stop>
        <stop offset="0.896" style="stop-opacity: 0"></stop>
      </linearGradient>
      <linearGradient id="gradient-5" gradientUnits="userSpaceOnUse" x1="420" y1="610" x2="420" y2="-168.179"
        gradientTransform="matrix(1 0 0 -1 0 442)">
        <stop offset="0.172" style="stop-opacity: 0"></stop>
        <stop offset="0.464" style="stop-opacity: 0.21"></stop>
        <stop offset="0.771" style="stop-opacity: 0"></stop>
      </linearGradient>
      <linearGradient id="gradient-vercel" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1.5" y2="1">
        <stop offset="0.3" style="stop-color: var(--g1)"></stop>
        <stop offset="0.5" style="stop-color: var(--g2)"></stop>
        <stop offset="0.8" style="stop-color: var(--g1)"></stop>
      </linearGradient>
      <linearGradient id="gradient-react" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1.1" y2="1">
        <stop offset="0.3" style="stop-color: var(--primary)"></stop>
        <stop offset="0.5" style="stop-color: #bbf0ff"></stop>
        <stop offset="0.8" style="stop-color: var(--primary)"></stop>
      </linearGradient>
      <symbol id="logo" viewBox="0 0 261.76 226.69">
        <g transform="matrix(1.3333 0 0 -1.3333 -76.311 313.34)">
          <g transform="translate(178.06 235.01)">
            <path d="m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z" fill="#41b883" />
          </g>
          <g transform="translate(178.06 235.01)">
            <path d="m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z" fill="#34495e" />
          </g>
        </g>
      </symbol>

      <linearGradient id="#mask-gradient">
        <stop offset="0" stop-color="black"></stop>
        <stop offset="1" stop-color="white"></stop>
      </linearGradient>
      <mask id="mask">
        <rect x="0" y="0" width="200" height="200" fill="url(#mask-gradient)"></rect>
      </mask>
    </defs>
    <g class="orbits" transform="translate(420, 220)">
      <g>
        <circle class="orbit" style="stroke: url(#gradient-1); animation-delay: 0" r="53.4"></circle>
      </g>
      <g>
        <circle class="orbit" style="stroke: url(#gradient-2); animation-delay: 0.03s" r="103.4"></circle>
        <circle class="gray satellite" style="animation-delay: 0.9s" cx="-69.6" cy="-76" r="5.8"></circle>
      </g>
      <g>
        <circle class="orbit" style="stroke: url(#gradient-3); animation-delay: 0.06s" r="160.4"></circle>
        <circle class="orange satellite" style="animation-delay: 0.8s" cx="102.4" cy="-123" r="5.8"></circle>
      </g>
      <g>
        <circle class="orbit" style="stroke: url(#gradient-4); animation-delay: 0.09s" r="267.3"></circle>
        <circle class="orange satellite" style="animation-delay: 0.6s" cx="-243.6" cy="111.4" r="5.8"></circle>
        <circle class="gray satellite" style="animation-delay: 1s" cx="250" cy="94.4" r="5.8"></circle>
        <circle class="orange satellite" style="animation-delay: 0.7s" cx="-236.6" cy="-123.6" r="5.8"></circle>
      </g>
      <g>
        <circle class="orbit" style="stroke: url(#gradient-5); animation-delay: 0.12s" r="388.5"></circle>
      </g>
    </g>
    <path id="vercel-logo" d="m336.4 261-46.2-80-46.2 80h92.4z" style="fill: url(#gradient-vercel)"></path>
    <g id="center">
      <path d="M420 202 v36 M 402 220h36" style="
          stroke-width: 3.5625;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke: #999;
          fill: none;
        "></path>
    </g>
    <use href="#logo" width="98" x="500"></use>
    <use href="#logo" width="98" x="500" mask="url(#mask)"></use>
  </svg>
</template>
