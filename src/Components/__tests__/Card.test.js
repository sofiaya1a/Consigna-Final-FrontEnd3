import { fireEvent, render, screen } from "@testing-library/react"
import { ContextProvider } from "../utils/global.context"
import { BrowserRouter } from "react-router-dom"
import React from "react"
import Card from "../Card"
import '@testing-library/jest-dom'

describe('La Card funciona', () => {

    const underTestProps = {
        name: 'testName',
        username: 'userNameTest',
        id: 123
    }
    test('La Card debe renderizarse y añadirse a favoritos', () => {

        render(
            <ContextProvider>
                <BrowserRouter>
                    <Card {...underTestProps} />
                </BrowserRouter>
            </ContextProvider>
        )

        const nameHeaderTest = screen.getByText('testName')

        expect(nameHeaderTest).toBeInTheDocument()
    })
})