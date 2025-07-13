"use client"
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import TotalBalance from '@/components/ui/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: 'Abi'};
  return (
   
   <section className="Home">
    <div className="home-content">
      <header className='home-header'>
        <HeaderBox 
        type="greeting"
        title="Welcome"
        user ={loggedIn?.firstName ||'Guest'}
        subtext = "Access and manage your account and transactions efficiently"
        />

        <TotalBalanceBox
        accounts ={[]}
        totalBanks={1}
        totalCurrentBalance={1250.50}
        />


      </header>
    </div>
   </section>
  )
}

export default Home
