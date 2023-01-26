import {render, waitFor, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event"

import { List } from "./components/List";

describe("List Component", ()=> {
  it("should render list items", ()=> {
    const { getByText, queryByText, unmount} = render(<List initialItems={['Vazio']} />)

    expect(getByText("Vazio")).toBeInTheDocument()

    unmount()

    render(<List  initialItems={['Moisés', 'Geo', 'Besourinha', 'Gaia', 'Pirata', 'Florzinha']}/>)
  
    expect(getByText("Moisés")).toBeInTheDocument()
    expect(getByText("Besourinha")).toBeInTheDocument()
    expect(getByText("Gaia")).toBeInTheDocument()
    expect(getByText("Pirata")).toBeInTheDocument()
    expect(getByText("Florzinha")).toBeInTheDocument()
    expect(queryByText('Vazio')).not.toBeInTheDocument()
  })

  it("should be able to add new item to the list", async ()=> {
    const { getByText, getByPlaceholderText } = render(<List initialItems={[]} />)

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

  it("should be able to add remove item from list", async ()=> {
    const { queryByText, getAllByText } = render(<List initialItems={['Tiranossauro']} />)

  
    const removeButtons = getAllByText("Remover");

    await userEvent.click(removeButtons[0])

    // é uma das maneiras de resolver
    /* await waitForElementToBeRemoved(()=> {
      return getByText('Moisés')
    }) */
    await waitFor(()=> {
      return expect(queryByText('Tiranossauro')).not.toBeInTheDocument()
    })
  })
})