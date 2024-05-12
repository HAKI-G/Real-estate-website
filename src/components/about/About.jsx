import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?'/>
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Story' subtitle='Check out our company story and work process' />

            <p>In a bustling city alley, Marcus, a shoe artisan, poured his passion into crafting footwear that whispered tales of adventure. With a dream to share his creations globally, SoleCraft was born.

Each pair, a blend of craftsmanship and soul, carried wearers through life's journeys with style and reliability..</p>
            <p>From rugged trails to city streets, SoleCraft became synonymous with quality and adventure.

Today, SoleCraft stands as Marcus's testament to dedication, crafting each shoe with care. Join the journey, step by step, and discover the extraordinary stories ahead..</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='https://images.pexels.com/photos/977908/pexels-photo-977908.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
