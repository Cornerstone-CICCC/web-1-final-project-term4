require("dotenv").config();
const express = require("express");
const multiparty = require("multiparty");
const nodemailer = require("nodemailer");
const app = express();
const path = require("path");

// port setting
const PORT = process.env.PORT || 3000;

// static file (HTML, CSS, etc.) folder setting
app.use(express.static(path.join(__dirname, "css")));
app.use(express.static(path.join(__dirname, "js")));
app.use("/public", express.static("public"));

// JSON setting
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routing setting
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "/about.html"));
});

app.get("/portfolio", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "/portfolio.html"));
});

app.get("/services", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "/services.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Send email
// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/send", (req, res) => {
  console.log(req.body);
  const mailOptions = {
    from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `New Contact Form Carla Beauty`,
    text: `You have received a new message:\n\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send("Failed to send email.");
    }
    console.log("Message sent: %s", info.messageId);
    res.status(200).send("Message sent successfully!");
  });
});
