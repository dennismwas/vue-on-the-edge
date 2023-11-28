import { renderPage } from 'vike/server'


export default async function handler(request,response) {
    const { url } = request
    if (url === undefined) throw new Error('req.url is undefined')


    const dateString = new Date().toISOString();
    const parsedCity = decodeURIComponent(request.headers['x-vercel-ip-city']);
    const ip = (request.headers['x-forwarded-for'] ?? '127.0.0.1').split(',')[0];
    const city = parsedCity == 'undefined' ? "Cannot get city" : parsedCity;

    const pageContextInit = { parsedCity, ip, path:request.path, city, urlOriginal: url, dateString }

    const pageContext = await renderPage(pageContextInit);

    const { httpResponse } = pageContext
    const { body, statusCode, headers } = httpResponse

    return new Response(body, {
        status: statusCode,
        headers: headers
    })
}