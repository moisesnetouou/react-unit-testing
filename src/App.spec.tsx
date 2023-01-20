import {render, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import { App } from "./App";

describe("App Component", ()=> {
  it("should render list items", ()=> {
    const { getByText } = render(<App />)

    expect(getByText("Moisés")).toBeInTheDocument()
    expect(getByText("Besourinha")).toBeInTheDocument()
    expect(getByText("Gaia")).toBeInTheDocument()
    expect(getByText("Pirata")).toBeInTheDocument()
    expect(getByText("Florzinha")).toBeInTheDocument()
  })

  it("should be able to add new item to the list", async ()=> {
    const { getByText, getByPlaceholderText, findByText } = render(<App />)

    const inputElement = getByPlaceholderText('Novo item')
    const addButton = getByText('Adicionar')

    await userEvent.type(inputElement, 'Novo')
    await userEvent.click(addButton)

    // Pode ser feito desta maneira
    await waitFor(async ()=> {
      expect(getByText('Novo')).toBeInTheDocument()
    })

    // Pode ser feito também, desta outra forma
    //  expect(await findByText('Novo')).toBeInTheDocument()
  })
})