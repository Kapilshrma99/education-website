import React from 'react'
import "./contact.css"
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import loc_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "128ad39e-792e-4850-bf34-fb38e9738dee");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>send a message <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem cum alias neque officiis reiciendis expedita iusto facere repellendus assumenda error laudantium qui, sapiente obcaecati accusantium, labore iure possimus impedit explicabo.</p>
            <ul>
                <li><img src={mail_icon} alt="" /> abc@gmail.com</li>
                <li><img src={phone_icon} alt="" />1234567890</li>
                <li><img src={loc_icon} alt="" />sdgnalnknzknzkvnzknvzn</li>
            </ul>
        </div>

        <div className="contact-col contact">
            <form onSubmit={onSubmit}>
                <label >Your Name</label>
                <input type="text" name="name" placeholder='enter name' required/>
                <label >Phone Number</label>
                <input type="tel" name='phone' placeholder='enter mobile no' required/>
                <label > write message</label>
                <textarea name="message" rows="6" placeholder='enter your message' required></textarea>
                <button className='btn dark-btn' type="submit">submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
      
    </div>
  )
}

export default Contact
