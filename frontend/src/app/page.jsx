import { Card } from '@/components/Card'
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1 className='text-center my-5 text-3xl front-bold'>Kome Page</h1>
      <p style={{ color:'red',fontSize:50,fontWight:'bold'}}> JSX is the combination of JS and HTML</p>
      <input type="text" />
      <br />
      <hr />
      <button className='global-btn'>Home Page</button>
      <button className='loginBtn'>Lets try</button>
      <img src="/globe.svg" className='size-16' alt="" />

      <div className='m-10 w-1/2'>
      <Card title="Card title 1" description="Card 1 description" />
      <Card title="Card title 1" description="Card 1 description"/>
      <Card title="Card title 1" description="Card 1 description"/>
      <Card title="Card title 1" description="Card 1 description"/>
      <Card title="Card title 1" description="Card 1 description"/>

      


      </div>
    </div>
    
  )
}

export default Home;