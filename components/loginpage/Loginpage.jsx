"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../public/logoenfo.png'
import loginimg from '../../public/loginimg1.png'
import styles from './login.module.scss'
import axios from 'axios'
import { useRouter } from 'next/router'

const Loginpage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter()

    const handleLogin = async(e) => {
        e.preventDefault()
        try{
            const response = await axios.post('/api/login' , {username , password}, {baseURL: ''})
            if (response.status === 200) {
                router.push('/project' , undefined, { shallow: true, username });
              } else {
                console.error('1st Login failed');
              }
        }
        catch(error){
            console.error('Login failed');
        }
      };
  return (
    <>
        <div className={styles.login}>
          <div className={styles.inner}>
            <div className={styles.left}>
              <form onSubmit={handleLogin}>
                <Image src={logo} alt=''/>
                <h1>Sign In</h1>
                <h5>Login to Stay Connected</h5>
                <div className={styles.inputs}>
                  <label htmlFor="">UserName</label>
                  <div className={styles.input}>
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                  </div>
                </div>
                <div className={styles.inputs}>
                  <label htmlFor="">PassWord</label>
                  <div className={styles.input}>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                </div>
                <button type="submit">Login</button>
              </form>
            </div>
            <div className={styles.right}>
              <Image src={loginimg} alt=''/>
            </div>
          </div>
          
        </div>
    </>
  )
}

export default Loginpage