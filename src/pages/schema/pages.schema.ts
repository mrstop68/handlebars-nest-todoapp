import * as mongoose from 'mongoose';

export const PageSchema = new mongoose.Schema({
  hotelid: {
    type: mongoose.Schema.Types.ObjectId,
    index: true,
  },
  pagename: String,
  link: String,
  img: String,
  // content: [],
  content: [
    {
      content: String,
      editorid: Number,
      showpicturenumber: Number,
      order: Number,
      sectionGroup: String,
    },
  ],
  editorid: Number,
  status: String,
  statusMenuFooter: String,
  subpage: String,
  order: Number,
  linkedpage: String,
  lang: String,
});
