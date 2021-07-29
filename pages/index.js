import Head from 'next/head'
import Image from 'next/image'
import Bodi from '../components/Bodi'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen bg-green-50 dark:bg-black dark:text-gray-200">
      <Head>
        <title>The Portfolio of Noah Wardlow</title>
        <meta name="description" content="Please hire me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
     
       <Bodi/>
     

      <footer >
    
      </footer>
    </div>
  )
}
