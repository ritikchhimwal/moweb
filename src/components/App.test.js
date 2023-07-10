import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import PageNotFound from './pageNotFound';
import SearchResult from './searchResult';
import useFetch from './useFetch';
import { fetchDataFromApi } from "./api";


describe('App', () => {
    test('renders App component', () => {
        render(<App />);
        const linkElement = screen.getByText(/Search/i);
        expect(linkElement).toBeInTheDocument();
    });
}  );

Path: src/components/pageNotFound.test.js
describe('PageNotFound', () => {
    test('renders PageNotFound component', () => {
        render(<PageNotFound />);
        const linkElement = screen.getByText(/Page Not Found/i);
        expect(linkElement).toBeInTheDocument();
    });
});

Path: src/components/searchResult.test.js
describe('SearchResult', () => {
    test('renders SearchResult component', () => {
        render(<SearchResult />);
        const linkElement = screen.getByText(/Search Result/i);
        expect(linkElement).toBeInTheDocument();
    });
});


Path: src/components/useFetch.test.js
describe('useFetch', () => {
    test('renders useFetch component', () => {
        render(<useFetch />);
    const linkElement = screen.getByText(/useFetch/i);
    expect(linkElement).toBeInTheDocument();
});
});

Path: src/utils/api.test.js

describe("fetchDataFromApi", () => {
    test("fetchDataFromApi should return data", async () => {
        const data = await fetchDataFromApi("/movie/popular");
        expect(data).toBeDefined();
    });
    test("fetchDataFromApi should return error", async () => {
        const data = await fetchDataFromApi("/movie/popular");
        expect(data).toBeDefined();
    });
});
