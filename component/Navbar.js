import React from 'react'
import Link from 'next/link'
import styles from '../styles/navbar.module.css'
import Script from 'next/script'


const Navbar = () => {
  return (
    
    <div>
      <p className={styles.logo}>Hisam</p>
      <nav className={styles.mainnav}>
      
      
      <ul className={styles.list}>
       
       <Link href='/' passHref><li className={styles.home}>Home</li></Link>
       <Link href='/about' passHref><li className={styles.about}> About </li></Link>
       <Link href='/blog' passHref><li className={styles.blog}> Blog </li></Link>
       <Link href='/contact' passHref><li className={styles.contact}>Contact </li></Link>
     </ul>
      
     </nav>
    </div>
      
  )
}

export default Navbar