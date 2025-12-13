import { SVGIconProps } from "@/lib/interfaces";

export default function Calendar({...props}: SVGIconProps ){
return (
  <svg
    {...props}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.25 9C2.25 7.114 2.25 6.172 2.836 5.586C3.422 5 4.364 5 6.25 5H18.25C20.136 5 21.078 5 21.664 5.586C22.25 6.172 22.25 7.114 22.25 9C22.25 9.471 22.25 9.707 22.104 9.854C21.957 10 21.72 10 21.25 10H3.25C2.779 10 2.543 10 2.396 9.854C2.25 9.707 2.25 9.47 2.25 9ZM2.25 18C2.25 19.886 2.25 20.828 2.836 21.414C3.422 22 4.364 22 6.25 22H18.25C20.136 22 21.078 22 21.664 21.414C22.25 20.828 22.25 19.886 22.25 18V13C22.25 12.529 22.25 12.293 22.104 12.146C21.957 12 21.72 12 21.25 12H3.25C2.779 12 2.543 12 2.396 12.146C2.25 12.293 2.25 12.53 2.25 13V18Z"
      fill="currentColor"
    />
    <path
      d="M7.25 3V6M17.25 3V6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

}