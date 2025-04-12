import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { Timeline } from "../models/timelineSchema.js";

export const postTimeline = catchAsyncErrors(async (req, res, next) => {
  const { title, description, from, to } = req.body;
  const newTimeline = await Timeline.create({
    title,
    description,
    timeline: { from, to },
  });
  res.status(200).json({
    success: true,
    message: "Timeline Added!",
    newTimeline,
  });
});
