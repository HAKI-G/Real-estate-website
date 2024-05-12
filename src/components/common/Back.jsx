import React from "react"

const Back = ({ name, title, cover }) => {
  return (
    <>
      <div className='back'>
        <div className='container'>
          <span>{name}</span>
          <h1>{title}</h1>
        </div>
        <img src="https://images.pexels.com/photos/3766217/pexels-photo-3766217.jpeg?auto=compress&cs=tinysrgb&w=600" alt='images' />
      </div>
    </>
  )
}

export default Back
