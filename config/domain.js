module.exports = {
    // Your domain goes here. If there is a port it should be 'domain:port', but otherwise just 'domain'
    'domain' : 'events.jevi.space' ,
    'port': '3000',
    'email': 'info@events.jevi.space',
    'mailService': 'nodemailer', // Which mail service to use to send emails to attendees. Options are 'nodemailer' or 'sendgrid'. Configure settings for the mail service in config/api.js.z
    'sitename': 'Events by Jevi',
    'isFederated': true,
    // If left blank, this defaults to https://yourdomain.com/images/gathio-email-logo.gif. Set a full URL here to change it to your own logo (or just change the file itself)
    'logo_url': '',
    // Show a Ko-Fi box to donate money to Raphael Kabo (Gathio's creator) on the front page
    'showKofi': false,
};
