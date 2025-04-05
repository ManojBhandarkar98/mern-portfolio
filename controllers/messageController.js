import React from 'react'
import ErrorHandler from '../middlewares/error'
import { catchAsyncErrors } from '../middlewares/catchAsyncErrors'
import { Message } from '../models/messageSchema'


export const sendMessage = catchAsyncErrors(async(req, resizeBy, next) => {
  const {senderName, subject, message} = req.body;

}) 

export default messageController