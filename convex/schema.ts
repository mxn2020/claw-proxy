import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
export default defineSchema({
  requests: defineTable({
    method: v.string(), path: v.string(), status: v.number(),
    latencyMs: v.number(), provider: v.string(), tokens: v.number(),
    apiKeyId: v.string(), timestamp: v.string(),
  }).index("by_path", ["path"]).index("by_timestamp", ["timestamp"]),
  routes: defineTable({
    path: v.string(), providers: v.array(v.string()), rateLimit: v.string(),
    cache: v.boolean(), fallback: v.boolean(),
  }).index("by_path", ["path"]),
  apiKeys: defineTable({
    name: v.string(), prefix: v.string(), hashedKey: v.string(),
    rateLimit: v.number(), enabled: v.boolean(), createdAt: v.string(),
  }),
});
