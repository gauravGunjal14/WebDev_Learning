const redisClient = require("../config/redis");

const WindowSize = 3600;
const MaxRequest = 60;

const rateLimiter = async (req, res, next) => {
    try {
        const key = `IP:${req.ip}`;
        const currentTime = Date.now() / 1000;
        const windowTime = currentTime - WindowSize;

        await redisClient.zRemRangeByScore(key, 0, windowTime);

        const numberOfRequest = await redisClient.zCard(key);

        if(numberOfRequest >= MaxRequest){
            throw new Error("Number of Request Exceeded");
        }

        await redisClient.zAdd(key, [{score: currentTime, value: `${currentTime}:${Math.random()}`}]);

        await redisClient.expire(key, WindowSize);

        next();
    }
    catch (err) {
        res.send("Error: " + err.message);
    }
}

module.exports = rateLimiter;