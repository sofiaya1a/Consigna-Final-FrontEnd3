import { render, screen } from "@testing-library/react"
import { ContextProvider } from "../utils/global.context"
import Footer from "../Footer"
import '@testing-library/jest-dom'

describe('Footer funciona', () => {

    test('Footer renderiza', () => {

        render(
            <ContextProvider>
                <Footer />
            </ContextProvider>
        )

        const underTestTitle = screen.getByText('Powered by')

        expect(underTestTitle).toBeInTheDocument()
    })
})