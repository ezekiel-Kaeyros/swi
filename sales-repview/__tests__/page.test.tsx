import HomePage from '@/app/[lang]/(sales-rep)/sales-rep/page';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
// import Page from '../app/page'

describe('Page', () => {
  it('renders a heading', () => {
    render(<HomePage />);

    // const heading = screen.getByRole('heading', { level: 1 })
    const heading = screen.getByRole('heading', {
      name: '/welcome to next.js!/i',
    });

    expect(heading).toBeInTheDocument();
  });
});
