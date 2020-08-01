
import getConfig from 'next/config'

const { serverRuntimeConfig: { testConstant } } = getConfig()

export const constant = testConstant;

export const clientConstant = "clientConstant"