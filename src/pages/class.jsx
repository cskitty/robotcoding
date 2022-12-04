import Head from 'next/head'
 
import { Screencasts } from '@/components/Screencasts'
import { ClassHeader } from '@/components/ClassHeader'
import { Footer } from '@/components/Footer'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'

export default function Class() {
  return (
    <>
      <Head>
        <title>Starcoder from Windtree</title>
        <meta
          name="description"
          content="K12 Robotics Education"
        />
      </Head> 
      <ClassHeader />
      <Screencasts />
      <Footer />
    </>
  )
}