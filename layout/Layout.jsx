// import components
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

// import head
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
