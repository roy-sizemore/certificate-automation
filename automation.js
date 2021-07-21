const nodemailer = require('nodemailer');

// Nodemailer function - sends email
"use strict";

async function email() {

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        },
    });

    let info = await transporter.sendMail({
        from: '"Kathryn Shipley',
        to: recipient,
        subject: 'Your event certificate from ODHE',
        text: 'Please find attached your event certificate',
        html: '<p>Please find attached your event certificate</p>',
        attachments: [{
            filename: 'certificate.pdf',
        }]
    });
};

email();

export default email;

// Manual import function - pulls attendees from .csv, .xlsx and .xls file(s) and adds them to the database


