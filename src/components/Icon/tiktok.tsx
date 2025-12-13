import { SVGIconProps } from "@/lib/interfaces";

// Nama komponen yang deskriptif untuk ikon TikTok
export default function TiktokIcon({...props}: SVGIconProps ){
return (
  <svg
    {...props}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Grup ini menerapkan area potong untuk memastikan ikon tetap di dalam batas */}
    <g clipPath="url(#clip0_1039_1097)">
      {/* Path untuk not musik di tengah */}
      <path
        d="M16.2033 19.0143C15.0788 19.0143 13.9795 19.3477 13.0445 19.9725C12.1095 20.5972 11.3807 21.4852 10.9504 22.5241C10.52 23.5631 10.4074 24.7063 10.6268 25.8092C10.8462 26.9121 11.3877 27.9252 12.1829 28.7204C12.978 29.5155 13.9911 30.0571 15.0941 30.2764C16.197 30.4958 17.3402 30.3832 18.3791 29.9529C19.4181 29.5226 20.306 28.7938 20.9308 27.8588C21.5555 26.9238 21.889 25.8245 21.889 24.7V9.61426C22.769 13.3885 25.3033 16.02 29.4833 16.02"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Path untuk bingkai luar */}
      <path
        d="M2.74355 29.3402C2.96946 31.3505 3.87027 33.2248 5.2989 34.6571C6.72753 36.0893 8.59955 36.9949 10.6093 37.2259C13.6664 37.5659 16.8007 37.8574 20.0007 37.8574C23.2007 37.8574 26.3378 37.5659 29.3921 37.2231C31.4018 36.9921 33.2739 36.0865 34.7025 34.6542C36.1311 33.222 37.0319 31.3477 37.2578 29.3374C37.5836 26.3002 37.8578 23.1802 37.8578 20.0002C37.8578 16.8202 37.5836 13.7002 37.2578 10.6602C37.0319 8.64991 36.1311 6.77559 34.7025 5.34333C33.2739 3.91107 31.4018 3.0055 29.3921 2.7745C26.335 2.43735 23.2007 2.14307 20.0007 2.14307C16.8007 2.14307 13.6636 2.4345 10.6093 2.77735C8.59955 3.00836 6.72753 3.91393 5.2989 5.34619C3.87027 6.77845 2.96946 8.65277 2.74355 10.6631C2.41784 13.6974 2.14355 16.8174 2.14355 20.0002C2.14355 23.1831 2.41784 26.3002 2.74355 29.3402Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    {/* Definisi untuk clip path */}
    <defs>
      <clipPath id="clip0_1039_1097">
        <rect width="40" height="40" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
}