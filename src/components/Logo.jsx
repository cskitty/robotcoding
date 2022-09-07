import logoImage from '@/images/logos/whitestarlogo.png'
import Image from 'next/future/image'
export function Logo(props) {
  return (
        <Image 
        src={logoImage}
        alt=""
        width={160}
        height={100}
        unoptimized
      />
  )
}