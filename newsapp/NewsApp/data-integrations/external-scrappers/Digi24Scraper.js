const puppeteer = require("puppeteer");

async function ScrapeDigi24() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.goto("https://www.digi24.ro");

    const rawData = await page.evaluate(() => {
        return Array.from(document.querySelectorAll("a")).map(a => ({
            href: a.href,
        }));
    });

    const regex = /^https:\/\/(www\.)?digi24\.ro\/stiri\/externe\/([a-zA-Z0-9-]+)-\d+$/;

    const filteredData=rawData.filter(a => regex.test(a.href));

    const res = [];
    const set=new Set();

    const mappedObjects= await Promise.all(
        filteredData.map(async(obj) => 
            {
        const objPage = await browser.newPage();
        await objPage.goto(obj.href);

        console.log("Se incarca articol Digi24");

        const image=await objPage.evaluate(() => {
            const image=document.querySelector("img");
            return image.src;
        })

        const title=await objPage.evaluate(() => {
            const title=document.querySelector("h1");
            return title.innerText; 
        })

        const description=await objPage.evaluate(()=>{
            const p=document.querySelector('p');
            return p.innerText; 
        })
//"title","category","description","source_url","language","image_url","link"
        obj.title=title;
        obj.image_url=image;
        obj.category='politica-externa';
        obj.language='ro';
        obj.source_url='https://www.digi24.ro'
        obj.description=description;
        obj.article_url=obj.href;
        return obj;

    }))
    await browser.close();
    return mappedObjects.filter(obj=>{
        if(set.has(obj.article_url)){
            return false;
        }
        else{
            set.add(obj.article_url);
            return true;
        }
    });
}

module.exports = ScrapeDigi24;
