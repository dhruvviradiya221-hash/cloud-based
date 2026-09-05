import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the cloud storage dashboard', () => {
  render(<App />);

  expect(screen.getByText(/driveflow/i)).toBeInTheDocument();
  expect(screen.getAllByText(/my drive/i).length).toBeGreaterThan(0);
});
