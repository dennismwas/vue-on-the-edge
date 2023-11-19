import { renderPage } from 'vike/server'

export const config = {
    runtime: 'edge',
};

export default async function handler(request) {
    const { url } = request
    if (url === undefined) throw new Error('req.url is undefined')


    const dateString = new Date().toISOString();
    const parsedCity = decodeURIComponent(request.headers['x-vercel-ip-city']);
    const ip = (request.headers['x-forwarded-for'] ?? '127.0.0.1').split(',')[0];
    const city = parsedCity == 'undefined' ? "Cannot get city" : parsedCity;
    
    const pageContextInit = { parsedCity, ip, city, urlOriginal: url, dateString }
    const pageContext = await renderPage(pageContextInit)
    const { httpResponse } = pageContext

    if (!httpResponse) {
        Response.statusCode = 200
        Response.end()
        return
    }

    const { body, statusCode, contentType } = httpResponse
    Response.statusCode = statusCode
    Response.setHeader('content-type', contentType)
    Response.end(body)
}