"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface HeaderProps {
  subtitle?: string;
  titleOne?: string;
  titleTwo?: string;
  description?: string;
  desc?: string;
  className?: string;
  oneLineTitle?: boolean;
  TitleBlog?: string;
  isFirstSection?: boolean; 
  TitleHero?: string;
  titleTwoHero?: string;
}


export default function Title(props: HeaderProps) {
  const { isFirstSection = false, ...restProps } = props;

  const motionProps = isFirstSection
    ? {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 1 },
        viewport: { once: true },
      }
    : {
        initial: { opacity: 0, x: -50 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration: 1 },
        viewport: { once: true },
      };

  return (
    <motion.div {...motionProps}>
      <TitleWithoutMotion {...restProps} />
    </motion.div>
  );
}

export function TitleWithoutMotion({
  subtitle = "",
  titleOne = "",
  titleTwo = "",
  description = "",
  desc = "",
  className = "",
  oneLineTitle = false,
  TitleBlog = "",
  TitleHero = "",
  titleTwoHero = "",
}: Omit<HeaderProps, 'isFirstSection'>) { 
  return (
    <div
      className={cn(
        `w-full flex flex-col items-center justify-center text-center gap-1 text-[10px] 
    md:text-start md:items-start md:justify-start md:text-[14px]
    lg:text-[18px]
    `,
        className
      )}
    >
      {subtitle && (
        <div className="text-[#1B1D75] flex items-center gap-3">
          <div className="w-[33px] h-[2px]  hidden md:block lg:block  bg-[#E9BE00]" />
          <h2 className="text-[10px] md:text-[14px] lg:text-[16px]">{subtitle}</h2>
        </div>
      )}
      <div className={`flex ${oneLineTitle ? "flex-row" : "flex-col"}`}>
          {TitleBlog && (
          <h1 className={`font-poppins text-[#1E1EB5] leading-tight text-left mb-3  text-[20px] md:text-[28px] lg:text-[32px] font-bold ${oneLineTitle ? "mr-2" : ""}`}>
            {TitleBlog}
          </h1>
        )}
        {titleOne && (
          <h1 className={`font-poppins text-[#1E1EB5]  text-[20px] md:text-[28px] lg:text-[36px] font-bold ${oneLineTitle ? "mr-2" : ""}`}>
            {titleOne}
          </h1>
        )}
         {TitleHero && (
          <h1 className={`font-poppins text-[#1E1EB5]  text-[20px] md:text-[28px] lg:text-[48px] font-bold ${oneLineTitle ? "mr-2" : ""}`}>
            {TitleHero}
          </h1>
        )}
        {titleTwo && (
          <h1 className="font-poppins text-[#E9BE00] text-[20px] md:text-[28px] lg:text-[36px] font-bold">
            {titleTwo}
          </h1>
        )}
          {titleTwoHero && (
          <h1 className="font-poppins text-[#E9BE00] text-[20px] md:text-[28px] lg:text-[48px] font-bold">
            {titleTwoHero}
          </h1>
        )}
      </div>
      {desc && <p className="text-[#4F4F4F] lg:max-w-[600px]">{desc}</p>}
      {description && <p className="text-[#4F4F4F]">{description}</p>}
    </div>
  );
}