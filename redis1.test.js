const redis = require("./redis");

describe("Redis 1", () => {
  it("should pass", async () => {
    expect(redis).toBeDefined();
    const ping = await redis.ping();
    expect(ping).toBe("PONG");
    const key = crypto.randomUUID();
    const value = crypto.randomUUID();
    await redis.set(key, value);
    const result = await redis.get(key);
    expect(result).toBe(value);
    await redis.del(key);
    const deleted = await redis.get(key);
    expect(deleted).toBeNull();
  });
});
