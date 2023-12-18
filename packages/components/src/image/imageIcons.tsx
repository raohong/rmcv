import React from 'react';

export const ImageErrorIcon: React.FC<{ className?: string }> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h32v32H0z" />
      <path
        d="M12.444 5.333l-.592 1.778H3.556v12.445l2.298-2.3a1.778 1.778 0 012.348-.147l.168.148 2.297 2.299 3.292-3.952 3.819 5.73L16 26.666H3.556a1.779 1.779 0 01-1.766-1.57l-.012-.208V7.11c0-.913.687-1.663 1.57-1.766l.208-.012h8.888zm16 0c.913 0 1.664.686 1.766 1.57l.012.208V24.89c0 .911-.685 1.663-1.57 1.766l-.208.012h-8.888l1.777-5.334-5.399-8.1 2.276-2.728c.657-.79 1.83-.85 2.564-.176l.15.156 7.52 8.774V7.11H15.408L16 5.333h12.444zM9.78 8.888c.496 0 .96.136 1.359.372l-.471 1.407 1.449 2.173a2.667 2.667 0 11-2.337-3.952z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export const ImageLoadingIcon: React.FC<{ className?: string }> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h32v32H0z" />
      <path
        d="M9.779 8.888a2.668 2.668 0 000 5.334 2.668 2.668 0 000-5.334m11.145 1.597a1.776 1.776 0 00-2.714.02l-7.543 9.05-2.297-2.298a1.778 1.778 0 00-2.516 0l-2.298 2.299V7.11h24.888V19.26l-7.52-8.774zm7.52-5.152H3.556c-.982 0-1.778.795-1.778 1.778V24.89c0 .981.796 1.778 1.778 1.778h24.888c.984 0 1.778-.797 1.778-1.778V7.11c0-.983-.794-1.778-1.778-1.778z"
        fill="currentColor"
      />
    </g>
  </svg>
);
