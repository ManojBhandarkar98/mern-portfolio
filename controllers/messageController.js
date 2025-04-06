import ErrorHandler from "../middlewares/error.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import { Message } from "../models/messageSchema.js";

export const sendMessage = catchAsyncErrors(async (req, res, next) => {
  const { senderName, subject, message } = req.body;
  if (!senderName || !subject || !message) {
    return next(new ErrorHandler("Pleas Fill Full Form", 400));
  }

  const data = await Message.create({ senderName, subject, message });
  res.status(201).json({
    success: true,
    message: "Message Sent",
    data,
  });
});

export const getAllMessage = catchAsyncErrors(async (req, res, next) => {
  const messages = await Message.find();
  res.status(200).json({
    success: true,
    messages
  });
});
