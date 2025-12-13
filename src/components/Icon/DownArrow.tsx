import { SVGIconProps } from "@/lib/interfaces";

export default function DownArrow({ ...props }: SVGIconProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 1.75L8 7.75L14 1.75"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  );
}
