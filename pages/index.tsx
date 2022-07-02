import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import {useUser} from '../lib/userUser'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const {user, logout} = useUser()
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <div className="flex-grow">
        <Hero />
      </div>
      <Footer />
    </div>
  )
}

export default Home
