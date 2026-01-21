URL for published documentation : https://documenter.getpostman.com/view/49278169/2sBXViiqoM

## Password Reset – Backend (Node.js + Express)
## 📌 Overview

The backend handles email verification, token generation, password hashing, and secure updates to the database.

## 📂 Features

User existence validation
Random reset token generation
Email sending with reset link
OTP verification
Password hashing using bcrypt
Token cleanup after reset

## 🔐 Security

Passwords hashed with bcrypt
Tokens stored temporarily
Token cleared after use

## 📦 Dependencies

express
mongoose
Brevo mailer
bcryptjs
dotenv
jsonwebtoken