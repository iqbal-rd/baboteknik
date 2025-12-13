// import Calendar from "@/components/Icon/Calendar";
// import Link from "next/link";
// import RightArrow2 from "@/components/Icon/RightArrow2";
// import Image from "next/image";
// import { Blog } from "@/types/Blog";
// import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
// import { mdxComponents } from "@/lib/mdx-components";

// interface ArticleCardProps {
//   article: Blog;
//   className?: string;
// }

// export default function ArticleCard({
//   article,
//   className = "",
// }: ArticleCardProps) {
//   const cardClassName = `flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg transition-transform duration-300 hover:-translate-y-1 group ${className}`;

//   return (
//     <div className={cardClassName}>
//       <Link
//         href={`/blog/${article.slug}`}
//         className="relative w-full max-w-[378px] overflow-hidden flex justify-center items-center"
//       >
//         <Image
//           src={article.image_url}
//           alt={article.image_alt}
//           width={800}
//           height={600}
//           unoptimized
//           loading="lazy"
//           priority={false}
//           className="object-contain w-auto max-h-[230px] md:max-h-[195px] lg:max-h-[249px]"
//         />
//       </Link>
//       <div className="flex flex-1 flex-col justify-between px-6 py-8">
//         <div>
//           <div className="flex items-center gap-2 font-[18px] text-sm text-[#1E1EB5]">
//             <Calendar width={24} height={24} className="text-[#1B1D75]" />
//             <span className="lg:text-[18px] text-[14px]">{article.created_at}</span>
//           </div>
//           <Link href={`/blog/${article.slug}`}>
//             <h3 className="mt-2 text-lg font-bold text-[20px] leading-tight text-[#1B1D75]  transition-colors">
//               {article.title}
//             </h3>
//           </Link>
//           <div className="mt-6 lg:text-[18px] md:text-[14px] text-gray-600 line-clamp-1">
//             <MDXRemote
//             {...(article.content as MDXRemoteSerializeResult)}
//             components={mdxComponents}
//           />
//           </div>
//         </div>

//         <Link
//           href={`/blog/${article.slug}`}
//           className="flex items-center gap-1 mt-4 text-[#1E1EB5] hover:text-[#1B1D75] transition-all duration-500 border-b border-[#1E1EB5] hover:border-[#1B1D75] w-fit"
//         >
//           <span className="lg:text-[14px] md:text-[10px]">
//             Lihat Selengkapnya
//           </span>
//           <RightArrow2 width={16} height={16} />
//         </Link>
//       </div>
//     </div>
//   );
// }
