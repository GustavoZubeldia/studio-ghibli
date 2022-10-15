import React from 'react'
import Hero from '../components/Hero'
import ItemList from '../components/ItemList'

const Home = () => {
  return (
    <main className='mx-auto max-w-screen-xl'>
      <Hero />
      <ItemList />
    </main>
    
  )
}

export default Home