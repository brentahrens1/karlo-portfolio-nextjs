import Head from 'next/head'
import Image from 'next/image'

import Homepage from '../components/Homepage/Homepage'

export default function Home() {
  return (
    <div className="site-container">
      <Homepage />
    </div>
  )
}
