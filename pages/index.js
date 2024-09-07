import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/layout/Layout";
import Users from "@/components/sections/Users/Users";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout title={'কোটা শহীদ - আমরা তোমাদের ভুলব না'}>
       <Users />
      </Layout>
  );
}
