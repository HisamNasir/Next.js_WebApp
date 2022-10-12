import React from 'react'
import styles from '../styles/contact.module.css'
import Link from 'next/link'

const Contact = () => {
  return <div className={styles.page}>
   <main className={styles.main}>
    <div className={styles.container}>
      <p>Contact me here!</p>

    </div>
    <div className={styles.box}>
          <div className={styles.boxin1}>
          <a>
           
           <h3 className={styles.blogItem}>Adress</h3></a>
         <p  className={styles.links}>
           Jinah Garden, Islamabad
         </p>
          </div>
          <div className={styles.boxin2}>
          <a>
           
           <h3 className={styles.blogItem1}>Cell Phone</h3></a>
         <p  className={styles.links}>
           030-12345678
         </p>
          </div>
          <div className={styles.boxin3}>
          <a>
           
           <h3 className={styles.blogItem}>Linkedin</h3></a>
         <a href="https://www.linkedin.com/in/hisam-nasir-8092b4176/" className={styles.links}>Hisam Nasir</a>
          </div>
          <div className={styles.boxin4}>
          <a>
           
           <h3 className={styles.blogItem}>Git Hub</h3></a>
         <a href="https://github.com/HisamNasir"  className={styles.links}>Hisam Nasir</a>
          </div>

        </div>
        
</main>
  </div>
}

export default Contact

