import App from "./App"
import { render, screen, userEvent, act } from "./test/tools"

describe("Simple working test", () => {
    it("the title is visible", () => {
        render(<App />)
        expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument()
    })

    it("should increment count on click", async () => {
        render(<App />)
        act(() => {
            void userEvent.click(screen.getByRole("button"))
        })
        expect(await screen.findByText(/count is/i)).toBeInTheDocument()
    })
})
