import { render, screen } from '@testing-library/react';
import App from './App';

// robimy test i nazywamy go
test('renders learn react link', () => {
  //mówimy co chcemy przetestować (render), wchodzimy do pliku App i odczytujemy go
  render(<App />);
  //chcemy zobaczyć czy napis Learn react się wyświetla. Screen pochodzi z reactowej biblioteki jest to metoda
  // co mamy na ekranie, co się wyświetla i getByText bierzemy cały tekst i sprawdzamy czy istnieje ten /tekst/ 
  const linkElement = screen.getByText(/Learn Programing/i);
  // oczekujemy czy ten tekst istnieje w tym dokumencie 
  expect(linkElement).toBeInTheDocument();
});
