import UserModel from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import verificationEmail from "../utils/verifyEmailTemplate.js";
import jwt from 'jsonwebtoken';
import { sendMail } from "../utils/sendEmail.js";

export async function registerUserController(req, res) {
  try {
    let user;
    const { name, email, password } = req.body;
    
    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Provide email, name, password",
        error: true,
        success: false
      });
    }

    // Check if user already exists
    user = await UserModel.findOne({ email: email });
    if (user) {
      return res.status(409).json({
        message: "User already registered with this email",
        error: true,
        success: false
      });
    }

    // Generate verification code
    const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();

    // Hash password
    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);

    // Create new user
    user = new UserModel({
      email: email,
      password: hashPassword,
      name: name,
      otp: verifyCode,
      otpExpiry: Date.now() + 600000
    });

    // Send verification email
    const mailSendResult = await sendMail(
      email, 
      "Verify email from ShopU", 
      "Your verification code is: " + verifyCode, 
      verificationEmail(name, verifyCode)
    );

    // Check if email was sent successfully
    if (!mailSendResult.success) {
      return res.status(500).json({
        message: "Failed to send verification email",
        error: true,
        success: false,
        details: mailSendResult.error
      });
    }

    // Save user
    await user.save();

    // Generate JWT token
    const token = jwt.sign({
      email: user.email,
      id: user._id
    }, process.env.JWT_PASSWORD);

    return res.status(201).json({
      success: true,
      error: false,
      message: "User registered successfully",
      token: token
    });

  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({
      message: "Internal server error",
      error: true,
      success: false
    });
  }
}