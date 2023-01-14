// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Axios from 'axios'
import 'dotenv/config'
import fs from 'fs'

const filePath = '../../pdf_files/230104000013_1271912979.pdf'
const pdf = fs.createReadStream(filePath)
const json = {file: pdf}

export default async function handler(req, res) {
  try {
    const response = await Axios.post(`${process.env.API_IP}:${process.env.API_PORT}/extractor`, json);
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error).json(error)
    console.error(error);
  }
}