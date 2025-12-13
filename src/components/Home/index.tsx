import Hero from "@/components/Home/Hero";
import Visi from "@/components/Home/Visi";
import Brand from "@/components/Home/Brand";
import Keunggulan from "@/components/Home/Keunggulan";
import Product from "@/components/Home/Product";
import Artikel from "./Artikel";
import Main from "../utils/Main";
// import { getAllBlogs } from "@/lib/Blogs";

export default async function Home() {
  // const { blogs } = await getAllBlogs(
  //     `?pagination[page]=1&pagination[pageSize]=3&sort=createdAt:desc&populate=*`
  //   );
  return (
    <Main id="home">
      <Hero />
      <Brand />
      <Visi />
      <Keunggulan />
      <Product />
      <Artikel />
       {/* blogs={blogs} /> */}
    </Main>
  );
}