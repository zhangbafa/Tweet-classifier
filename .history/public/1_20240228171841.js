//引入模块
const https = require('https')
const cheerio = require('cheerio')
const fs = require('fs')
const mysql = require('mysql')
const db = mysql.createConnection({
    host: 'localhost',
    port:'8889',
    user: 'root',
    password: 'root',
    database: 'wallpapel' // 连接mysql对应的数据库
});

db.connect((err) => {
    console.log(err)
    if (!err) {
        console.log('连接mysql成功')
    }
});

function getContent(url){
    //获取页面的html结构
https.get(url, function (res) {
    let html = ''
    res.on('data', function (chunk) {
        html += chunk
    })


    

    res.on('end', function () {
        // 获取html中的数据
        const $ = cheerio.load(html)
       
        let arr = []
        let a = 0
        let title = $("title").text()
        //拿到每一个item中我们需要的数据
        $('.w3-third').each(function (index,ele) {
            // console.log($(ele).attr('href'))
            a=a+1
        //    arr.push($(ele).attr('href'))
            const element = $(ele).find('a').attr('href')
            var modifiedUrl=''
            var indexOfAmpersand = element.indexOf('&');
            // .const modifiedStr = str.replace("Download 4k", "");
            const text = $(ele).find('p').text().replace("Download 4k", "").trim()
            if(indexOfAmpersand>1){
                 modifiedUrl = element.substring(0, indexOfAmpersand);
            }else{
                modifiedUrl = element
            }
            modifiedUrl = modifiedUrl.replace("https://cn.bing.com/th?id=",'')
            modifiedUrl = modifiedUrl.replace("_UHD.jpg",'')
            
            console.log(modifiedUrl,text)
             let sql = `insert into wallpapel(date,url,title,copyright) VALUES ('${text}','${modifiedUrl}','','')`
              db.query(sql, (err, result) => {
                if (!err) {
                  console.log('插入数据成功')
                }
              })

            
           fs.appendFile("./bing000.txt",sql+"\n",(err)=>{
            // console.log(err)
           })
        })
        console.log(a)
        //console.log(allFiles);
        //将数据写入文件中
    })
})
}


const arr = [
    '2024-02.html',
    // '2024-01.html', '2023-12.html', '2023-11.html',
    // '2023-10.html', '2023-09.html', '2023-08.html',
    // '2023-07.html', '2023-06.html', '2023-05.html',
    // '2023-04.html', '2023-03.html', '2023-02.html',
    // '2023-01.html', '2022-12.html', '2022-11.html',
    // '2022-10.html', '2022-09.html', '2022-08.html',
    // '2022-07.html', '2022-06.html', '2022-05.html',
    // '2022-04.html', '2022-03.html', '2022-02.html',
    // '2022-01.html', '2021-12.html', '2021-11.html',
    // '2021-10.html', '2021-09.html', '2021-08.html',
    // '2021-07.html', '2021-06.html', '2021-05.html',
    // '2021-04.html', '2021-03.html', '2021-02.html'
  ]


for (let index = 0; index < arr.length; index++) {
    const element = arr[index].replace(".html",'');
     getContent(`https://bing.wdbyte.com/${element}`)
   
    
}