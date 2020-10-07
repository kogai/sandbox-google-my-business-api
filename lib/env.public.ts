import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export const clientID: string = publicRuntimeConfig.clientID
export const redirectURI: string = publicRuntimeConfig.redirectURI
