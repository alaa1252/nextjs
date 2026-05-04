// CH-48: Unit Test — data helpers
import { describe, it, expect } from "vitest"
import { products, posts } from "@/lib/data"

describe("products data", () => {
  it("has 6 products",    () => expect(products).toHaveLength(6))
  it("all have slugs",    () => products.forEach(p => expect(p.slug).toBeTruthy()))
  it("all have prices",   () => products.forEach(p => expect(p.price).toBeGreaterThan(0)))
  it("all have ratings",  () => products.forEach(p => expect(p.rating).toBeGreaterThan(0)))
})

describe("posts data", () => {
  it("has 6 posts",      () => expect(posts).toHaveLength(6))
  it("all have slugs",   () => posts.forEach(p => expect(p.slug).toBeTruthy()))
  it("all have authors", () => posts.forEach(p => expect(p.author).toBeTruthy()))
})
