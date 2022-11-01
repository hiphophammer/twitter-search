import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Twitter Search</title>
        <link rel="icon" href="/icon_1.ico" />
      </Head>

      <main className="bg-white dark:bg-slate-800 flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          ㅇㅅㅇ
        </h1>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">

      </footer>
    </div>
  )
}

export default Home
