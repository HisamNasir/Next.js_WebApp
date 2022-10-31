import React from 'react'
import Link from 'next/link'
import styles from '../styles/navbar.module.css'
import {Home, Quote, Linkedin , Paperclip, Github } from 'lucide-react';
import Script from 'next/script'


const Navbar = () => {
  return (
    
    <div>
      <p className=" z-10 absolute text-black cursor-pointer p-5 text-4xl font-bold">Hisam</p>
      <nav className={styles.mainnav}>
      
      
      <ul className="flex justify-end">
       
       <Link href='/' passHref><li className={styles.home}><Home className='mx-auto'/>Home</li></Link>
       <Link href='/about' passHref><li className={styles.about}> <Home className='mx-auto'/>About </li></Link>
       <Link href='/blog' passHref><li className={styles.blog}> <Home className='mx-auto'/>Blog </li></Link>
       <Link href='/contact' passHref><li className={styles.contact}><Home className='mx-auto'/>Paperclip </li></Link>
     </ul>
     {/* <header class=" bg-white sticky top-0 border-b-2 border-red-700 flex items-center h-20 z-10">
          <h1 className=' px-2 text-4xl hover:text-red-700 cursor-pointer'>Hisam</h1>
          <div className='absolute inset-y-22 right-5'>
            <a className='cursor-pointer mx-2 p-3 px-4 hover:text-red-700 inline-block' ><Home className='mx-auto'/><span>Home</span></a>
            <a className='cursor-pointer mx-2 p-3 px-4 hover:text-red-700 inline-block'><Quote className='mx-auto'/><span>About</span></a>
            <a className='cursor-pointer mx-2 p-3 px-4 hover:text-red-700 inline-block '><Paperclip className='mx-auto'/><span>Contact</span></a> 
          </div>
      </header> */}
      
     </nav>
    </div>
      
  )
}

export default Navbar