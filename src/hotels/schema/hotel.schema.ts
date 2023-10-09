import * as mongoose from 'mongoose';

export const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: String,
  phone: Number,
  email: String,
  website: String,
  description: String,
  image: String,
  logo: {
    logoname: String,
    logodescription: String,
  },
  icon: {
    iconname: String,
    icondescription: String,
  },
  seoinfo: {
    title: String,
    description: String,
    slogan: String,
    adress: String,
    email: String,
    phone1: String,
    phone2: String,
    youtube: String,
    insta: String,
    facebook: String,
    twitter: String,
    maps: String,
  },
  categoryimg: [],
  LangName: String,
  LangCode: String,
  LangLink: String,
});
