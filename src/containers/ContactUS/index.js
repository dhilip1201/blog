import React from 'react'
import Card from '../../components/UI/Card'

/**
* @author
* @function ContactUS
**/

const ContactUS = (props) => {
  return(
    <Card style={{ marginBottom: "20px", padding: "20px", boxSizing: "border-box" }}>
      <div className="cardHeader">
        <span>Contact Us</span>
      </div>
      <div className="cardBody">
        <p className="personalBio" >M. Dhilip Kumar</p>
        <p className="personalBio">2/155, palaghat main road, pollachi </p>
        <p className="personalBio"> Coimbatore TamilNadu, 642005</p>
        <p className="personalBio">+91 887 084 7064 </p>
        <p className="personalBio">dhilipbeece006@gmail.com </p>
        




        </div>
    </Card>
   )

 }

export default ContactUS