const nodemailer = require('nodemailer');

// Create transporter (using Gmail as example)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com', // Replace with your email
        pass: 'your-app-password'     // Replace with your app password (not regular password)
    }
});

// Email options
const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'your-email@gmail.com', // Sending to yourself
    subject: 'Test Email from Node.js',
    text: 'Hello from Node.js! This is a test email.'
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});