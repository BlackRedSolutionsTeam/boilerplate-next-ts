import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import TestComponent from '.'

describe('<TestComponent />', () => {
  it('should render \\"Hello Test!\\"', () => {
    render(<TestComponent title="Hello Test!" color="red" />)
    expect(
      screen.getByRole('heading', { name: /Hello Test!/i })
    ).toBeInTheDocument()
  })
})
