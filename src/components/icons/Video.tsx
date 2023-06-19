import React from "react";

const Video = ({ height = "100%", width = "100%" }) => {
  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M27 4H5C3.34315 4 2 5.34315 2 7V25C2 26.6569 3.34315 28 5 28H27C28.6569 28 30 26.6569 30 25V7C30 5.34315 28.6569 4 27 4Z"
          fill="#B71C1C"
        ></path>
        <path
          d="M25 24H7C6.73478 24 6.48043 23.8946 6.29289 23.7071C6.10536 23.5196 6 23.2652 6 23C6 22.7348 6.10536 22.4804 6.29289 22.2929C6.48043 22.1054 6.73478 22 7 22H25C25.2652 22 25.5196 22.1054 25.7071 22.2929C25.8946 22.4804 26 22.7348 26 23C26 23.2652 25.8946 23.5196 25.7071 23.7071C25.5196 23.8946 25.2652 24 25 24Z"
          fill="#EEEEEE"
        ></path>
        <path
          d="M19 25C18.7348 25 18.4804 24.8946 18.2929 24.7071C18.1054 24.5196 18 24.2652 18 24V22C18 21.7348 18.1054 21.4804 18.2929 21.2929C18.4804 21.1054 18.7348 21 19 21C19.2652 21 19.5196 21.1054 19.7071 21.2929C19.8946 21.4804 20 21.7348 20 22V24C20 24.2652 19.8946 24.5196 19.7071 24.7071C19.5196 24.8946 19.2652 25 19 25Z"
          fill="#EEEEEE"
        ></path>
        <path
          d="M20.45 12.67L13.45 9.16996C13.2978 9.09325 13.1285 9.05673 12.9581 9.06386C12.7878 9.071 12.6222 9.12155 12.4769 9.21072C12.3316 9.2999 12.2115 9.42473 12.1281 9.57336C12.0446 9.722 12.0005 9.8895 12 10.06V17.94C12.0013 18.1182 12.0502 18.2928 12.1416 18.4457C12.233 18.5987 12.3637 18.7244 12.52 18.81C12.6648 18.897 12.831 18.942 13 18.94C13.1872 18.9406 13.3709 18.8886 13.53 18.79L20.53 14.41C20.6816 14.3156 20.8051 14.1823 20.8877 14.024C20.9704 13.8658 21.0091 13.6883 21 13.51C20.9905 13.3339 20.9347 13.1635 20.8381 13.0159C20.7415 12.8684 20.6076 12.7491 20.45 12.67Z"
          fill="#EEEEEE"
        ></path>
        <path
          d="M5 4C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V25C2 25.7956 2.31607 26.5587 2.87868 27.1213C3.44129 27.6839 4.20435 28 5 28H16V4H5Z"
          fill="#E53935"
        ></path>
        <path
          d="M7 22C6.73478 22 6.48043 22.1054 6.29289 22.2929C6.10536 22.4804 6 22.7348 6 23C6 23.2652 6.10536 23.5196 6.29289 23.7071C6.48043 23.8946 6.73478 24 7 24H16V22H7Z"
          fill="#FAFAFA"
        ></path>
        <path
          d="M13.45 9.16996C13.2978 9.09325 13.1285 9.05673 12.9581 9.06386C12.7878 9.071 12.6222 9.12155 12.4769 9.21072C12.3316 9.2999 12.2115 9.42473 12.1281 9.57336C12.0446 9.722 12.0005 9.8895 12 10.06V17.94C12.0013 18.1182 12.0502 18.2928 12.1416 18.4457C12.233 18.5987 12.3637 18.7244 12.52 18.81C12.6648 18.897 12.831 18.942 13 18.94C13.1872 18.9406 13.3709 18.8886 13.53 18.79L16 17.24V10.44L13.45 9.16996Z"
          fill="#FFEBEE"
        ></path>
        <path
          d="M27 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V25C2 25.7956 2.31607 26.5587 2.87868 27.1213C3.44129 27.6839 4.20435 28 5 28H27C27.7956 28 28.5587 27.6839 29.1213 27.1213C29.6839 26.5587 30 25.7956 30 25V7C30 6.20435 29.6839 5.44129 29.1213 4.87868C28.5587 4.31607 27.7956 4 27 4ZM28 25C28 25.2652 27.8946 25.5196 27.7071 25.7071C27.5196 25.8946 27.2652 26 27 26H5C4.73478 26 4.48043 25.8946 4.29289 25.7071C4.10536 25.5196 4 25.2652 4 25V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H27C27.2652 6 27.5196 6.10536 27.7071 6.29289C27.8946 6.48043 28 6.73478 28 7V25Z"
          fill="#263238"
        ></path>
      </g>
    </svg>
  );
};

export default Video;
