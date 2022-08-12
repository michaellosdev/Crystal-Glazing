const express = require('express')
const nodemailer = require('nodemailer')
const dotenv = require('dotenv').config()

const app = express();

const PORT = process.env.PORT || 5000

//middleware
app.use(express.static('../frontend')) 
app.use(express.json())

 app.get('/', (req, res) => {
  res.sendFile(__dirname + '../frontend/index.html')
 })

 app.post('/', (req, res)=> {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'mishaloskutov@gmail.com',
      pass: process.env.PASSWORD
    }
  })

  const mailOptions = {
    from: req.body.email,
    to: 'info@loskutech.com',
    subject: `Message from ${req.body.email}`,
    text: `Message was sent by ${req.body.name}
          Phone number is: ${req.body.phone}   

          ${req.body.message}
      `
  }
  transporter.sendMail(mailOptions, (error, info) => {
    if(error){
      console.log(error)
      res.send('error')

    } else {
      console.log('Email was send successfully')
      res.send('success')
    }
  })
 })

 app.listen(PORT, ()=> {
  console.log('server running')
 })