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