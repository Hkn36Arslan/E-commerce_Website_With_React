import React from "react"
import Header from "../Components/Layout/Header/Header"
import Footer from "../Components/Layout/Footer/Footer"
import Policy from "../Components/Layout/Policy/Policy"
import Contact from "../Components/Contact/Contact"

const ContactPage = () => {
  return (
    <React.Fragment>
     <Header/>
     <Contact/>
     <Policy/>
     <Footer/>
    </React.Fragment>
  )
}

export default ContactPage