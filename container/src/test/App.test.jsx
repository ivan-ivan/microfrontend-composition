import { render } from '@testing-library/react';
import React from 'react';
import App from '../App.jsx';
import { mfeConfiguration } from '../constants';

describe('App tests', () => {
    it('should contain container element', () => {
        const result = render(<App />);
        const container = result.container.querySelector('#container');

        expect(container).toBeInTheDocument();
    });

    it('should contain correct quantity of children elements', () => {
        const result = render(<App />);
        const container = result.container.querySelector('#container');

        expect(container.children.length).toBe(mfeConfiguration.length);
    });
});
