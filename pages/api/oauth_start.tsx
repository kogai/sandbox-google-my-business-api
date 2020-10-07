import { NextApiRequest, NextApiResponse } from 'next'
import { authURL } from '../../lib/oauth'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.redirect(authURL)
}

export default handler
