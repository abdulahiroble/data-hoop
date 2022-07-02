import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {useUser} from '../lib/userUser'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const {user, logout} = useUser()
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}

export default Home
