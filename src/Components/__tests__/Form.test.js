import { act, fireEvent, render, screen } from "@testing-library/react"
import Form from "../Form"
import '@testing-library/jest-dom'


describe('Form funciona', () => {

    test('Form renderizado', () => {

        render(
            <Form />
        )

        const underTestTitle = screen.getByText('Aquí se registrarán tus datos - Porfavor, digita aquí tus datos')

        expect(underTestTitle).toBeInTheDocument()
    })

    test('Form error: Mal ingreso del nombre', () => {

        render(
            <Form />
        )

        const underTestInputName = screen.getByTestId('name-input-test-id')
        const underTestSubmitButton = screen.getByText('Enviar')
        
        
        fireEvent.change(underTestInputName, { target: { value: 'ab' } })
        fireEvent.click(underTestSubmitButton)

        const underTestWarningMessage = screen.getByTestId('dialog-warning-test-id')

        expect(underTestWarningMessage).toBeVisible()
        expect(underTestWarningMessage.innerHTML).toEqual('Chequea que la información sea correcta.<button data-testid=\"delete-alert-button-test-id\">✕</button>')

    })

    test('Form error: Mal ingreso del email', () => {

        render(
            <Form />
        )

        const underTestInputName = screen.getByTestId('name-input-test-id')
        const underTestInputEmail = screen.getByTestId('email-input-test-id')
        const underTestInputAge = screen.getByTestId('age-input-test-id')
        const underTestSubmitButton = screen.getByText('Enviar')
        
        
        fireEvent.change(underTestInputName, { target: { value: 'abcde' } })
        fireEvent.change(underTestInputEmail, { target: { value: 'na' } })
        fireEvent.change(underTestInputAge, { target: { value: 2 } })
        fireEvent.click(underTestSubmitButton)

        const underTestWarningMessage = screen.getByTestId('dialog-warning-test-id')

        expect(underTestWarningMessage).toBeVisible()
        expect(underTestWarningMessage.innerHTML).toEqual('Chequea que la información sea correcta.<button data-testid=\"delete-alert-button-test-id\">✕</button>')

    })

    test('Form: borrar mensajes de error', () => {

        render(
            <Form />
        )

        const underTestInputName = screen.getByTestId('name-input-test-id')
        const underTestInputEmail = screen.getByTestId('email-input-test-id')
        const underTestInputAge = screen.getByTestId('age-input-test-id')
        const underTestSubmitButton = screen.getByText('Enviar')
        
        
        fireEvent.change(underTestInputName, { target: { value: 'abcde' } })
        fireEvent.change(underTestInputEmail, { target: { value: 'na' } })
        fireEvent.change(underTestInputAge, { target: { value: 2 } })
        fireEvent.click(underTestSubmitButton)

        const underTestWarningMessage = screen.getByTestId('dialog-warning-test-id')

        expect(underTestWarningMessage).toBeVisible()
        expect(underTestWarningMessage.innerHTML).toEqual('Chequea que la información sea correcta.<button data-testid=\"delete-alert-button-test-id\">✕</button>')

        const underTestCloseWarningButton = screen.getByTestId('delete-alert-button-test-id')

        act(() => {
            fireEvent.click(underTestCloseWarningButton)
        })
        
        expect(underTestWarningMessage).toBeVisible()

    })

    test('Form: Enviar correctamente', () => {

        render(
            <Form />
        )

        const underTestInputName = screen.getByTestId('name-input-test-id')
        const underTestInputEmail = screen.getByTestId('email-input-test-id')
        const underTestInputAge = screen.getByTestId('age-input-test-id')
        const underTestSubmitButton = screen.getByText('Enviar')
        
        
        fireEvent.change(underTestInputName, { target: { value: 'testName' } })
        fireEvent.change(underTestInputEmail, { target: { value: 'testname@testname.com' } })
        fireEvent.change(underTestInputAge, { target: { value: 24 } })
        fireEvent.click(underTestSubmitButton)


        const underTestSuccessMessage = screen.getByText('Gracias por tu información testName, estaremos en contacto.')

        expect(underTestSuccessMessage).toBeInTheDocument()

    })
})