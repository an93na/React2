import { render, screen } from '@testing-library/react';
import App from './App';

// 'nazywamy sobie jakos ten nasz test'
test('renders learn react link', () => {
  // render oznacza, że wchodzimy do pliku App
  render(<App />);
  // screen co mamy na ekranie jeeśli coś nam się wyświetla 
  // to bierzemy ten tekst czyli 
  // getByText(/tutaj tekst, który sprawdzamy czy istnieje/i)
  const linkElement = screen.getByText(/learn react/i);
  // expect oczekujemy że element LinkElement 
  // znajduje się w naszym dokumencie
  expect(linkElement).toBeInTheDocument();
});
