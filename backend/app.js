const express = require('express')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const nodemailer = require('nodemailer')
const path = require('path')

const app = express()

//view engine
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars')

//body parser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

const PORT =  process.env.PORT || 5000

//Middleware

app.use(express.static('../frontend'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '../frontend/idex.html', )
})

app.post('/send', (req, res) => {
    const output = `
        <p> You have a new message </p>
        <h3> Contact details </h3>
        <ul>
            <li> Name: ${req.body.name} </li>
            <li> Email: ${req.body.email} </li>
            <li> Phone: ${req.body.phone} </li>
        </ul>
        <h3> Message </h3>
        <p>${req.body.message}</p>
    `

   
      
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
          host: "smtp.ethereal.email",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
          },
        });
      
        // send mail with defined transport object
        let info = transporter.sendMail({
          from: '"Fred Foo 👻" <foo@example.com>', // sender address
          to: "bar@example.com, baz@example.com", // list of receivers
          subject: "Hello ✔", // Subject line
          text: "Hello world?", // plain text body
          html: "<b>Hello world?</b>", // html body
        });
      
        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      
      
      main().catch(console.error);
})






app.listen(PORT, ()=> {
    console.log(`Server running om port ${PORT}`)
})


