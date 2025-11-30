import Image from 'next/image'
import {FC} from 'react'
import Link from 'next/link'
import SearchInput from './SearchInput'
import { Tiro_Devanagari_Hindi } from "next/font/google";

const tiroDevanagari = Tiro_Devanagari_Hindi({
  weight: ["400"],
  subsets: ["devanagari"],
});

const Header:FC = () => {
  return (
    <nav className={`flex justify-between items-center py-1 ${tiroDevanagari.className}`}>
    <Link href="/">
      <div className='relative w-[200px] h-[50px] flex items-center'>
       <h1 className='text-3xl font-bold text-red-600'>हिन्दुस्तान</h1>
      </div>
    </Link>
    <SearchInput />
  </nav>
  )
}

export default Header