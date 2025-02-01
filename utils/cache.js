const redis = require('redis');

const client = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
});

client.on('error', (err) => console.log('Redis Error:', err));

const get = (key) => new Promise((resolve, reject) => {
    client.get(key, (err, data) => {
        if (err) reject(err);
        resolve(data);
    });
});

const set = (key, value, ttl) => {
    client.setex(key, ttl, value);
};

module.exports = { get, set };
