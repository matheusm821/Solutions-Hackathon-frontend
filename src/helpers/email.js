const nodemailer = require('nodemailer')
require('dotenv').config()

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSEMAIL
    },
    tls: {
        rejectUnauthorized: false,
    }
});

async function enviarEmail({email,name,telephone,msg}) {
   if(!name){
    name= 'Não Informado'
   }
   if(!email){
    email= 'Não Informado'
   }
   if(!telephone){
    telephone = 'Não Informado'
   }
   if(!msg){
    msg = 'Não Informado'
   }
    const mailsend = await transporter.sendMail({
        from: 'isaacdsc10@gmail.com',
        to: 'isaac8.silva@hotmail.com',
        subject: 'MENSAGEM HACKTUDO!',
        html: `<html>
        <h2>Email: ${email}</h2><p>
        <h2>Nome: ${name}</h2><p>
        <h2>Email: ${email}</h2><p>
        <h2>Celular: ${telephone}</h2><p>
        <h2>Mensagem: ${msg}</h2>
        </html>
        `

    }).then(async message => {
        console.log(message)

    }).catch(err => console.log(err))
}

exports.enviarEmail = enviarEmail
