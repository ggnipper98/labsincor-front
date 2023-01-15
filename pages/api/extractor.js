// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Axios from 'axios'
import 'dotenv/config'
import fs from 'fs'

const filePath = '../../pdf_files/230104000013_1271912979.pdf'
async function pdfToBase64(filePath) {
  await fs.readFile(filePath, (err, data) => {
    if (err) throw err;
    const pdfAsBase64 = data.toString('base64');
    const myPdf = pdfAsBase64;
    return myPdf;
  });
}

export default async function handler(req, res) {
  try {
    const response = await Axios.post(`${process.env.API_IP}:${process.env.API_PORT}/extractor`, {file: pdfToBase64(filePath)});
    res.status(response.status).json(response.data);
  } catch (error) {
    if (!error.response) {
      return res.status(502).json({error: 'Comunicação API falhou!'})
    }
    res.status(error.response.status).json({error: 'Comunicação API falhou!'})
    console.error(error);
  }
}