import React from 'react'

const Footer = () => {
  let today=new Date()
  return (
    <>
      <div className='container' >
        Team members {today.getFullYear()}
      </div>
    </>
  )
}

export default Footer