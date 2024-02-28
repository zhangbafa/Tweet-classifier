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

const Promise = require('promise');

// 定义一个函数，用于获取网页内容
function getContent(url) {
  return new Promise((resolve, reject) => {
    const res = request(url);

    if (!res.ok) {
      return reject(new Error('请求失败，状态码：' + res.statusCode));
    }

    res.on('data', chunk => {
      const html = new Buffer(chunk).toString('utf8');
      resolve(html);
    });

    res.on('error', err => {
      reject(err);
    });
  });
}

// 初始化一个数组，用于存储要下载的壁纸URL
const arr = [
  // 这里可以添加更多的壁纸URL
];


// 使用Promise处理每个URL
Promise.all(arr.map(url => getContent(url)))
  .then(htmls => {
    // 遍历所有网页内容，查找所有的.w3-third元素
    htmls.forEach((html, index) => {
      const $ = cheerio.load(html);
      const links = $('.w3-third').find('href');

      // 对于每个.w3-third元素，获取其href属性，并将其替换为正确的URL
      Promise.all(links.map(link => {
        const correctUrl = link
          .attr('href')
          .replace(/\/\/+/g, '/')
          .replace(/\/+$/, '');

        return new Promise((resolve, reject) => {
          resolve(correctUrl);
        });
      }))
        .then(correctUrls => {
          // 将正确的URL和标题（通常是壁纸的标题）插入数据库中
          db.query('INSERT INTO wallpapers (url, title) VALUES (?, ?)', correctUrls.map(url => [url, '壁纸' + index]))
            .then(() => {
              console.log('壁纸已成功插入数据库：', url);
            })
            .catch(err => {
              console.error('插入壁纸时发生错误：', err);
            });
        })
        .catch(err => {
          console.error('获取壁纸URL时发生错误：', err);
        });
    });
  })
  .catch(err => {
    console.error('发生错误：', err);
  });


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