/* eslint-disable no-unused-vars */
import React from 'react'


function Footer() {

  const currentYear = new Date().getFullYear();
  return (

    <footer>
        <p> Copyrighted &copy; {currentYear} Rohail Iqbal.</p>
    </footer> 
  )
}

export default Footer;
