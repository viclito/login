import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../public/logoenfo.png'
import styles from './navbar.module.scss'
import Link from 'next/link'
import user from '../../public/user.png'
import { useRouter } from 'next/router'

const Navbar = () => {
    const [show , setShow] = useState(false)
    const router = useRouter();
    const { username } = router.query;

  return (
    <>
        <div className={styles.main}>
            <div className={styles.inner}>
                <h4>{username}</h4>
                <div className={styles.profile} onClick={() => setShow(!show)} >
                    <Image src={user} alt=''/>
                </div>
                    <div className={`${!show ? `${styles.logout} ${styles.hide}` : styles.logout}`}>
                        <p><Link href='/login'>Logout</Link></p>
                    </div>
            </div>
        </div>
        <div className={styles.navbar}>
        <div className={styles.inner}>
            <Image src={logo} alt=''/>
            <h4 ><Link href='/project'>Project</Link></h4>
            <h4 ><Link href='/task'>Task</Link> </h4>
        </div>
        
    </div>     
    </>
  )
}

export default Navbar