import React from 'react'
import './global.css'
import WithAuth from '../Layout/WithAuth';

function About() {
  return (
    <div id='center'>This is About Page</div>
  )
}
// export default About
export default WithAuth(About)