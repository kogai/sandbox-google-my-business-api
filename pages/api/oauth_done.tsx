import { NextApiRequest, NextApiResponse } from 'next'
import { oauth2Client } from '../../lib/oauth'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const code = req.query['code'] as string
  const { tokens } = await oauth2Client.getToken(code)
  console.log(tokens) // expiry_date included.
  // oauth2Client.setCredentials(tokens)
  return res.status(200).json({ message: 'ok' })
}

export default handler
