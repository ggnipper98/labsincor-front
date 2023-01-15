// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Axios from 'axios'
import 'dotenv/config'

export default async function handler(req, res) {
  try {
    const response = await Axios.get(`${process.env.API_IP}:${process.env.API_PORT}/test`);
    res.status(response.status).json(response.data);
  } catch (error) {
    if (!error.response) {
      return res.status(502).json({error: 'Comunicação API falhou!'})
    }
    res.status(error.response.status).json({error: 'Comunicação API falhou!'})
    console.error(error);
  }
}