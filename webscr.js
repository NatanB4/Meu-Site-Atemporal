const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://www.google.com/search?q=temporal+em+SERRA&sxsrf=AOaemvLn6-unKKSdX0Cm7a2dacpvWTWaqg%3A1635015416079&ei=-Fp0YfqLBPXU1sQPg-m1qAc&ved=0ahUKEwj6586Im-HzAhV1qpUCHYN0DXUQ4dUDCA4&uact=5&oq=temporal+em+SERRA&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeOgcIIxCwAxAnOgcIABBHELADOgQIIxAnOggILhCABBCxAzoECAAQAzoICAAQsQMQgwE6BQguEIAEOgsIABCABBCxAxCDAUoECEEYAFDnJlibRmD1SGgGcAJ4AoABzwOIAcYQkgEJMC40LjIuMS4xmAEAoAEByAEKwAEB&sclient=gws-wiz');
    // é pra tirar print!  await page.screenshot({ path: 'example.png' });

    const imglist = await page.evaluate(() => {

        const nodeList = document.querySelectorAll(".UQt4rd .wob_tci")
        const imgArray = [...nodeList]
        const imglist = imgArray.map(({ src }) => ({
            src
        }))
        return imglist
    });
    const txtList = await page.evaluate(() => {
        const nodetxt = document.querySelectorAll("#wob_tm")
        const txtArray = [...nodetxt];
        const txtList = txtArray.map(({ textContent }) => ({
            textContent
        }))
        return txtList
    });
    const txtList1 = await page.evaluate(() => {
        const nodetxt1 = document.querySelectorAll(".wtsRwe div")
        const txtArray1 = [...nodetxt1]
        const txtList1 = txtArray1.map(({ textContent }) => ({
            textContent
        }))
        return txtList1
    });
    fs.writeFile('./Json/Tempo.json', JSON.stringify(imglist, null, 2), err => {
        if (err) throw new Error('something wen wrong')
        console.log("wel done img")
    })
    fs.writeFile('./Json/textContent.json', JSON.stringify(txtList, null, 2), err => {
        if (err) throw new Error('não funcionou o txt')
        console.log("wel done txt")
    })
    fs.writeFile('./Json/conteudoC.json', JSON.stringify(txtList1, null, 2), err => {
        if (err) throw new Error('não funcionou o content')
        console.log("wel done txt")
    })

      await browser.close();
})();
