
//запрашиваем погоду по городу или по координатам, пример: node index.js "Москва" или node index.js "55.753215,37.622504"

const http = require('http');
const config = require('./config/config');

const accessKey = config.accessKey;

const options = {
    hostname: 'api.weather.yandex.ru',
    path: '/v2/forecast?lat=52.37125&lon=4.89388',
    headers: {
        'X-Yandex-Weather-Key': accessKey
    }
};

const req = http.get(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log(JSON.parse(data));
    });
});

req.on('error', (error) => {
    console.error(error);
});
