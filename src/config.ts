import { CHAIN_NODE } from "./constants";
import { ProcessorConfig } from "./types";

export const config: ProcessorConfig = {
  chainName: 'calamari',
  prefix: 'calamari',
  dataSource: {
    archive: 'https://dev.calamari-debug.graphql.nonprod-mantadex.com/graphql',
    chain: CHAIN_NODE,
  },
}

export const SUBSCAN_ENDPOINT = 'https://calamari.api.subscan.io'

export const SUBSCAN_API_KEY = process.env.SUBSCAN_API_KEY

if(!SUBSCAN_API_KEY) {
  throw new Error("No SUBSCAN_API_KEY")
}