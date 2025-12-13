import { SVGIconProps } from "@/lib/interfaces";

export default function Close({ ...props }: SVGIconProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 25 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.75 2.5L2.25 19.5M2.25 2.5L22.75 19.5"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
