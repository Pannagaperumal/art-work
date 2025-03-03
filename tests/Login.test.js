import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { expect } from 'chai';
import Login from '../src/pages/auth/Login/Login';

describe('Login Component', () => {
  it('should render without crashing', () => {
    const { container } = render(<Login />);
    expect(container).to.exist;
  });

  it('should have a login button', () => {
    const { getByText } = render(<Login />);
    const loginButton = getByText(/login/i);
    expect(loginButton).to.exist;
  });

  it('should handle user input', () => {
    const { getByLabelText } = render(<Login />);
    const emailInput = getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput.value).to.equal('test@example.com');
  });
});
