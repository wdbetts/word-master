import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the WORDILIO title', () => {
  render(<App />)
  const title = screen.getByText(/WORDILIO/i)
  expect(title).toBeInTheDocument()
})
