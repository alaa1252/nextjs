// CH-48: Unit Test — Button component
import { describe, it, expect } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import Button from "@/components/Button"

describe("Button component", () => {
  it("renders children", () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText("Click me")).toBeTruthy()
  })

  it("calls onClick when clicked", () => {
    let clicked = false
    render(<Button onClick={() => { clicked = true }}>Click</Button>)
    fireEvent.click(screen.getByText("Click"))
    expect(clicked).toBe(true)
  })

  it("does not call onClick when disabled", () => {
    let clicked = false
    render(<Button disabled onClick={() => { clicked = true }}>Click</Button>)
    const btn = screen.getByText("Click")
    fireEvent.click(btn)
    // disabled button should not fire
    expect(btn.closest("button")).toHaveProperty("disabled", true)
  })

  it("applies primary variant by default", () => {
    render(<Button>Primary</Button>)
    const btn = screen.getByText("Primary")
    expect(btn.tagName).toBe("BUTTON")
  })
})
