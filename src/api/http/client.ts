const COIN_GECKO_URL = 'https://api.coingecko.com/api/v3/'

export const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const coinGeckoFetcher = (url: string) => fetcher(COIN_GECKO_URL + url)
