import React, { useContext } from 'react'
import { appContext } from './Context'

const Meals = () => {
  const Context=useContext(appContext)
  console.log(Context)
  return (
    <>
<h3>Meals</h3>
    </>
  )
} 

export default Meals