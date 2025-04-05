import express from "express";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";

const app = express();



app.use(cookieParser());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);


export default app;
