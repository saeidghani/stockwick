import React from 'react';

const colors = {
  primary: '#001560',
  secondary: '#5FE90A',
};

// eslint-disable-next-line import/prefer-default-export,react/prop-types,no-unused-vars
export function BullishIcon({ fill, wrapperClassName }) {
  return (
    <div className={wrapperClassName}>
      <svg
        width="24"
        height="15"
        viewBox="0 0 24 15"
        fill="#5FE90A"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          /* eslint-disable-next-line max-len */
          d="M10.4521 14.9937C10.4521 14.9937 10.1539 14.215 10.2487 14.0016C10.3436 13.7882 11.748 10.5472 11.748 10.5472C11.748 10.5472 9.88499 10.3661 9.02684 9.30945C8.82841 10.3721 8.33608 11.3629 7.60215 12.1767L8.93142 13.5754C9.20702 13.7155 9.44398 13.9173 9.62251 14.164C9.80105 14.4108 9.916 14.6952 9.95774 14.9937L8.33984 14.9539C8.27021 14.8231 8.24169 14.6755 8.2578 14.5292C8.2739 14.3829 8.33394 14.2445 8.43049 14.1308C8.38457 13.9393 5.54593 12.9542 5.42428 12.6185C5.30262 12.2828 6.08027 12.2026 5.81907 12.1184C5.39668 11.8766 5.05303 11.5248 4.82733 11.1032C4.3299 11.6592 3.72528 12.116 3.04723 12.4483L3.30426 13.5258C3.44723 13.6332 3.56623 13.7676 3.65406 13.9207C3.7419 14.0739 3.79675 14.2427 3.81533 14.4169L1.99288 14.4296C1.97276 14.1296 2.02144 13.829 2.13542 13.5494C2.30776 13.2794 1.13413 11.2388 1.31125 10.8218C1.41561 10.5755 1.74302 10.6187 2.03821 10.662C2.24455 10.692 2.43477 10.7197 2.52422 10.6545C2.73831 10.4884 2.24276 8.12991 2.71626 7.16033C2.00541 7.03517 0.0887298 5.42133 0.00285534 4.71765C-0.0830191 4.01398 1.79192 2.29515 2.4157 2.15384C2.85564 2.09982 3.30064 2.09652 3.74138 2.14401C4.1604 2.20661 4.58765 2.19569 5.00266 2.11173C5.34735 1.92658 5.5537 1.49919 5.43383 1.32615C5.30543 1.16159 5.13394 1.03315 4.93707 0.954111C4.72826 1.12935 4.47296 1.24464 4.19998 1.28693C3.83859 1.30481 2.97685 0.890656 2.86891 0.497864C3.25714 0.538816 3.83858 0.0225929 4.26974 0.000675032C4.7009 -0.0212428 5.02413 0.497864 5.02413 0.497864C5.02413 0.497864 5.88586 1.13926 5.88586 1.44958C5.76541 1.95685 5.45934 2.40489 5.02413 2.71101C4.60451 2.81455 4.16993 2.84942 3.7384 2.81423C3.36909 2.80272 2.99939 2.81679 2.63216 2.85634C1.96365 2.959 1.01547 4.17893 1.03753 4.63517C1.0596 5.09141 2.52185 5.85969 2.91186 5.71031C3.30188 5.56092 11.0139 2.07018 13.3188 1.96694C14.9414 1.89311 17.2386 4.47251 18.7927 6.12385C19.4487 6.82061 20.0205 6.74448 20.3623 7.3478C20.4724 7.55668 20.5542 7.77846 20.6056 8.00763C20.3485 7.97084 20.0873 7.97084 19.8303 8.00763C19.5321 8.0555 19.3532 8.35368 19.3437 8.83299C19.3353 9.24482 19.4552 9.75069 19.8208 9.82163C20.0169 9.84173 20.2151 9.83197 20.4082 9.79277C20.5203 9.77489 20.6372 9.7622 20.7523 9.75355C20.7455 10.0621 20.6745 10.3662 20.5435 10.6476C20.1971 11.2348 18.4086 13.0955 18.1069 13.137C17.9437 13.1539 17.7791 13.1211 17.6362 13.043C17.4933 12.9649 17.3793 12.8455 17.3101 12.7015C17.2429 11.9499 17.3166 11.1927 17.5278 10.4665C17.0352 10.6486 16.4919 10.6564 15.994 10.4884L15.9523 13.7184C16.1119 13.8218 16.2479 13.956 16.3516 14.1125C16.4553 14.269 16.5246 14.4445 16.5552 14.628L14.7446 14.6701C14.7287 14.3221 14.7655 13.9736 14.8538 13.6359C14.9826 13.3677 14.2932 10.5166 14.2932 10.5166L13.6676 10.5259L11.2101 14.0056C11.2101 14.0056 12.1171 14.5951 12.2239 15L10.4521 14.9937ZM22.6302 8.89875C22.3058 8.81387 21.9648 8.80736 21.6373 8.87974C21.4556 8.9205 21.2686 8.93409 21.0827 8.92009C20.7511 8.85549 20.6819 7.62235 21.0827 7.56237C21.8267 7.47126 22.5785 7.66087 23.1818 8.09184C23.6559 8.50154 23.9489 9.07199 24 9.68494C24 9.72185 23.9863 9.73855 23.9594 9.73855C23.7931 9.73798 23.1269 9.06371 22.6302 8.89875Z"
          fill={colors[fill] || '#fff'}
        />
      </svg>
    </div>
  );
}

// eslint-disable-next-line import/prefer-default-export,react/prop-types,no-unused-vars
export function MessagesIcon({ fill, wrapperClassName }) {
  return (
    <svg width="22" height="22" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        /* eslint-disable-next-line max-len */
        d="M0.845217 24.2424C0.622401 24.2424 0.408594 24.1544 0.250308 23.9976C0.0920225 23.8408 0.00206311 23.6278 0 23.405L0 12.558C0 12.0102 0.107894 11.4678 0.317522 10.9617C0.527149 10.4556 0.834405 9.99581 1.22175 9.60847C2.00402 8.82619 3.06501 8.38672 4.1713 8.38672H12.5217C13.628 8.38672 14.689 8.82619 15.4713 9.60847C16.2536 10.3907 16.693 11.4517 16.693 12.558V17.5667C16.693 18.673 16.2536 19.734 15.4713 20.5163C14.689 21.2985 13.628 21.738 12.5217 21.738H4.45304L1.32261 24.0859C1.18325 24.1857 1.01662 24.2403 0.845217 24.2424V24.2424ZM4.17913 10.0615C3.51494 10.0615 2.87795 10.3254 2.40829 10.795C1.93863 11.2647 1.67478 11.9017 1.67478 12.5659V21.738L3.67826 20.2354C3.82317 20.1281 3.99884 20.0705 4.17913 20.0711H12.5217C13.1859 20.0711 13.8229 19.8072 14.2926 19.3376C14.7622 18.8679 15.0261 18.2309 15.0261 17.5667V12.558C15.0261 11.8938 14.7622 11.2568 14.2926 10.7872C13.8229 10.3175 13.1859 10.0537 12.5217 10.0537L4.17913 10.0615Z"
        fill="white"
      />
      <path
        /* eslint-disable-next-line max-len */
        d="M24.197 15.8908C24.0166 15.8919 23.8407 15.8342 23.6961 15.7265L20.5657 13.3786H19.1883C19.072 13.3899 18.9547 13.3767 18.8439 13.34C18.733 13.3032 18.6311 13.2437 18.5446 13.1652C18.4581 13.0867 18.389 12.991 18.3417 12.8842C18.2944 12.7774 18.27 12.6619 18.27 12.5451C18.27 12.4284 18.2944 12.3129 18.3417 12.2061C18.389 12.0993 18.4581 12.0036 18.5446 11.9251C18.6311 11.8466 18.733 11.7871 18.8439 11.7503C18.9547 11.7136 19.072 11.7004 19.1883 11.7117H20.863C21.0434 11.7105 21.2193 11.7682 21.3639 11.876L23.3674 13.3786V4.21428C23.3674 3.55009 23.1035 2.9131 22.6339 2.44344C22.1642 1.97378 21.5272 1.70993 20.863 1.70993H12.5204C11.8562 1.70993 11.2192 1.97378 10.7496 2.44344C10.2799 2.9131 10.0161 3.55009 10.0161 4.21428V5.88124C10.0274 5.99748 10.0142 6.11479 9.97744 6.22564C9.94069 6.33649 9.88115 6.43843 9.80266 6.52491C9.72417 6.61138 9.62846 6.68048 9.52167 6.72777C9.41489 6.77506 9.29939 6.79949 9.18261 6.79949C9.06582 6.79949 8.95033 6.77506 8.84354 6.72777C8.73676 6.68048 8.64104 6.61138 8.56255 6.52491C8.48406 6.43843 8.42452 6.33649 8.38777 6.22564C8.35101 6.11479 8.33785 5.99748 8.34913 5.88124V4.21428C8.34913 3.10798 8.7886 2.04699 9.57087 1.26472C10.3531 0.482452 11.4141 0.0429761 12.5204 0.0429761H20.863C21.4115 0.0419471 21.9547 0.149082 22.4617 0.358249C22.9687 0.567416 23.4295 0.874509 23.8177 1.26195C24.2058 1.6494 24.5138 2.10959 24.7239 2.61618C24.934 3.12278 25.0422 3.66584 25.0422 4.21428V15.0612C25.0381 15.2827 24.9472 15.4937 24.7891 15.6488C24.6311 15.8039 24.4184 15.8908 24.197 15.8908V15.8908Z"
        fill="white"
      />
      <path
        /* eslint-disable-next-line max-len */
        d="M10.009 14.248H5.00809C4.89185 14.2593 4.77454 14.2461 4.66369 14.2094C4.55284 14.1726 4.4509 14.1131 4.36442 14.0346C4.27795 13.9561 4.20885 13.8604 4.16156 13.7536C4.11427 13.6468 4.08984 13.5313 4.08984 13.4145C4.08984 13.2978 4.11427 13.1823 4.16156 13.0755C4.20885 12.9687 4.27795 12.873 4.36442 12.7945C4.4509 12.716 4.55284 12.6565 4.66369 12.6197C4.77454 12.5829 4.89185 12.5698 5.00809 12.5811H10.009C10.1252 12.5698 10.2425 12.5829 10.3534 12.6197C10.4642 12.6565 10.5662 12.716 10.6526 12.7945C10.7391 12.873 10.8082 12.9687 10.8555 13.0755C10.9028 13.1823 10.9272 13.2978 10.9272 13.4145C10.9272 13.5313 10.9028 13.6468 10.8555 13.7536C10.8082 13.8604 10.7391 13.9561 10.6526 14.0346C10.5662 14.1131 10.4642 14.1726 10.3534 14.2094C10.2425 14.2461 10.1252 14.2593 10.009 14.248V14.248Z"
        fill="white"
      />
      <path
        /* eslint-disable-next-line max-len */
        d="M7.51244 17.583H5.00809C4.89185 17.5943 4.77454 17.5811 4.66369 17.5443C4.55284 17.5076 4.4509 17.448 4.36442 17.3696C4.27795 17.2911 4.20885 17.1954 4.16156 17.0886C4.11427 16.9818 4.08984 16.8663 4.08984 16.7495C4.08984 16.6327 4.11427 16.5172 4.16156 16.4104C4.20885 16.3037 4.27795 16.2079 4.36442 16.1294C4.4509 16.051 4.55284 15.9914 4.66369 15.9547C4.77454 15.9179 4.89185 15.9047 5.00809 15.916H7.51244C7.62868 15.9047 7.746 15.9179 7.85685 15.9547C7.9677 15.9914 8.06964 16.051 8.15611 16.1294C8.24259 16.2079 8.31169 16.3037 8.35898 16.4104C8.40626 16.5172 8.43069 16.6327 8.43069 16.7495C8.43069 16.8663 8.40626 16.9818 8.35898 17.0886C8.31169 17.1954 8.24259 17.2911 8.15611 17.3696C8.06964 17.448 7.9677 17.5076 7.85685 17.5443C7.746 17.5811 7.62868 17.5943 7.51244 17.583Z"
        fill="white"
      />
    </svg>
  );
}
