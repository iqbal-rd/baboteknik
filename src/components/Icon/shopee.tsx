import { SVGIconProps } from "@/lib/interfaces";

export default function ShoppingBagIcon({...props}: SVGIconProps ){
return (
  <svg
    {...props}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.167 11.6667C14.167 8.91167 16.667 5 20.0003 5C23.3337 5 25.8337 8.91167 25.8337 11.6667M6.66699 11.6667L8.11199 31.905C8.17236 32.7471 8.55002 33.5349 9.16872 34.1094C9.78742 34.6839 10.6011 35.0022 11.4453 35H28.572C29.4163 35.0022 30.2299 34.6839 30.8486 34.1094C31.4673 33.5349 31.845 32.7471 31.9053 31.905L33.3503 11.6667H6.68366H6.66699Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.834 28.3337C16.5223 29.1037 17.5007 30.0003 20.0007 30.0003C22.5007 30.0003 24.1673 28.5053 24.1673 26.667C24.1673 24.8287 22.5007 24.167 20.0007 23.3337C17.5007 22.5003 16.6673 20.8837 16.6673 20.0003C16.6673 18.1603 18.334 16.667 20.0007 16.667C21.6673 16.667 22.5007 16.667 24.1673 18.3337"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
}