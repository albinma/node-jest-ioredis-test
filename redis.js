const Redis = require("ioredis");

const redis = new Redis({
  port: 6379,
  host: "localhost",
  db: 0,
  username: "default",
  password: "redis",
});

redis.on("connect", () => {
  console.log("Redis connected");
});

redis.on("error", (error) => {
  console.error(error, "Redis error");
});

module.exports = redis;
