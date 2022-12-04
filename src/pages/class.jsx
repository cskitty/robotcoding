import Head from 'next/head'
 
import { Hero } from '@/components/Hero'  
 
import { Screencasts } from '@/components/Screencasts'
 import { Header } from '@/components/Header'
 import { Footer } from '@/components/Footer'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>Starcoder from Windtree</title>
        <meta
          name="description"
          content="K12 Robotics Education"
        />
      </Head> 
        <Header />
      <Screencasts />
      <Footer />
    </>
  )
}
