require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/send-mail', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Lütfen tüm alanları doldurun!' });
  }

  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let mailOptions = {
      from: `"Evyap Nakliyat" <${process.env.EMAIL_USER}>`, //Gonderen Mail
      to: 'eren99srb@gmail.com', //Hedef Mail
      subject: `Yeni Mesaj - ${name}`,
      text: `Ad: ${name}\nE-posta: ${email}\n\nMesaj: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: 'Mail başarıyla gönderildi!' });
  } catch (error) {
    console.error('Mail gönderme hatası:', error);
    res.status(500).json({ error: 'Mail gönderilemedi!' });
  }
});

const PORT = 3761;
app.listen(PORT, () => console.log(`Server ${PORT} portunda çalışıyor...`));
