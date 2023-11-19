import { renderPage } from 'vike/server'

export const config = {
    runtime: 'edge',
};

export default async function handler(req, res) {
    const { url } = req
    if (url === undefined) throw new Error('req.url is undefined')


    const dateString = new Date().toISOString();
    const parsedCity = decodeURIComponent(req.headers['x-vercel-ip-city']);
    const ip = (req.headers['x-forwarded-for'] ?? '127.0.0.1').split(',')[0];
    const city = parsedCity == 'undefined' ? "Cannot get city" : parsedCity;
    
    const pageContextInit = { parsedCity, ip, city, urlOriginal: url, dateString }
    const pageContext = await renderPage(pageContextInit)
    const { httpResponse } = pageContext

    if (!httpResponse) {
        res.statusCode = 200
        res.end()
        return
    }

    const { body, statusCode, contentType } = httpResponse
    res.statusCode = statusCode
    res.setHeader('content-type', contentType)
    res.end(body)
}