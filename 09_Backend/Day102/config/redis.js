const redis = require('redis');

const redisClient = redis.createClient({
    username: 'default',
    password: 'fsdBYkTppr8A5mxhOcNaeYGxEEdNGHfM',
    socket: {
        host: 'redis-19993.crce179.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 19993
    }
});

const connectRedis = async () => {
    try {
        await redisClient.connect();
        console.log("Connected to Redis");
    } catch (err) {
        console.log("Error connecting to Redis:", err);
    }
};

connectRedis();

module.exports = redisClient;