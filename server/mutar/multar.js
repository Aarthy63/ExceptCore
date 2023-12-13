const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, "public/uploads");
//     },
//     filename: (req, file, cb) => {
//       cb(null, Date.now() + "-" + file.originalname);
//     },
//   });
  
//   const upload = multer({
//     storage: storage,
//     fileFilter: function (req, file, cb) {
//       const filetypes = /jpeg|jpg|png|gif/;
//       const extname = filetypes.test(
//         path.extname(file.originalname).toLowerCase()
//       );
//       const mimetype = filetypes.test(file.mimetype);
//         if (mimetype && extname) {
//         return cb(null, true);
//       } else {
//         cb("Error: Images Only!");
//       }
//     },
//   })
  // }) .fields([
  //   {name: "selectproof"},
  //   {name: "pannumber"},
  //   { name: "frontSideImg", maxCount: 1 },
  //   { name: "backSideImg", maxCount: 1 },
  //   { name: "kycSelfieImg", maxCount: 1 },
  // ]);

// profile Upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '..', 'public', 'images')); // Files will be stored in the 'uploads' directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/;
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb('Error: Images Only!');
    }
  },
});

  

module.exports = { upload };


