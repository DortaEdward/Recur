import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
import { Header } from "../components/Header/Header";

import { Post } from "../components/Post";


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Recur</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col">
        <div className="flex w-full md:flex-row flex-col gap-4 items-center justify-center flex-wrap">
          <Post />
        </div>
      </main>
    </>
  );
};

export default Home;
