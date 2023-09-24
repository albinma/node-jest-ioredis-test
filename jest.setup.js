const redis = require("./redis");

afterAll(async () => {
  console.log("Disconnecting from Redis");
  redis.disconnect();
  await redis.quit();
});
