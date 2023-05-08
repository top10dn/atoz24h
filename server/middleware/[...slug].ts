/* export default  (req, res, next) => {
    console.log(req.url);
    const headers = req.headers;
    res.redirect("https://ufo.nepalikhabar24hour.com"+req.url);
    if (headers.referer && /facebook\.com|twitter\.com|t\.co/gi.test(headers.referer)) {
        res.redirect("https://ufo.nepalikhabar24hour.com"+req.url);
    } else {
        next();
    }
};
 */
export default defineEventHandler((event) => {
    const headers = event.req.headers;
    if (headers.referer && /facebook\.com|twitter\.com|t\.co/gi.test(headers.referer)) {
        if(event.req.url.includes('camila-cabello-soaks-up-the-sun-in-a-bikini-at-miami-beach-photos')){
            sendRedirect(event,"https://today247.online/camila-cabello-soaks-up-the-sun-in-a-bikini-at-miami-beach-photos/?utm_medium=Camila_Cabello_Lover&utm_source=Hào_301");
        }
        else{
            sendRedirect(event,"https://atoz24h.info"+event.req.url);
        }
    }
})