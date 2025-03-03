import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProductListingSection } from './ProductListingSection';
import { DataProvider } from '../../../../contexts/DataProvider';
import { UserDataProvider } from '../../../../contexts/UserDataProvider';

describe('ProductListingSection', () => {
  test('renders without crashing', () => {
    render(
      <DataProvider>
        <UserDataProvider>
          <ProductListingSection />
        </UserDataProvider>
      </DataProvider>
    );
    expect(screen.getByText(/Sorry, there are no matching products!/i)).toBeInTheDocument();
  });

  // Additional tests can be added here
});
