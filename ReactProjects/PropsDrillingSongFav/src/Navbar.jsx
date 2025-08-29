import React from 'react'
import styles from './style.module.css'

const Navbar = () => {
  return (
    <div className='w-full px-20 py-3 flex justify-between items-center'>
      <h3 className={styles.a}>Orange</h3>
      <div className='flex py-2 px-4 text-sm text-white rounded-md gap-3 bg-orange-600'>
      <h3>Favourites</h3>
      <h4>3</h4>
      </div>
    </div>
  )
}

export default Navbar
