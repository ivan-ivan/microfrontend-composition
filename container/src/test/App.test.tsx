import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import { MFE_CONFIGURATION } from '../constants';

describe('App tests', () => {
    it('should contain container element', () => {
        const result = render(<App />);
        const container = result.container.querySelector('#container');

        expect(container).toBeInTheDocument();
    });

    it('should contain correct quantity of children elements', () => {
        const result = render(<App />);
        const container = result.container.querySelector('#container');

        expect(container.children.length).toBe(MFE_CONFIGURATION.length);
    });
});
