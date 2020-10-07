import { google } from 'googleapis'
import { redirectURI, clientID } from './env.public'
import { clientSecret } from './env.secret'

export const oauth2Client = new google.auth.OAuth2({
  clientId: clientID,
  clientSecret: clientSecret,
  redirectUri: redirectURI,
})

export const scopes = [
  // 'https://www.googleapis.com/auth/blogger',
  // 'https://www.googleapis.com/auth/calendar'
  'https://www.googleapis.com/auth/business.manage',
]

export const authURL = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: 'offline',

  // If you only need one scope you can pass it as a string
  scope: scopes,
})
