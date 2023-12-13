const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    editorData: {
      type: String,
      required: true,
    },
  },
  {
    collection: "contents",
  }
);

const Content = mongoose.model('Contents', contentSchema);

module.exports = Content;