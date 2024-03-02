import * as React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import MicroFrontendWrapper from '../MicroFrontendWrapper';

describe('MicroFrontendWrapper tests', () => {
    it('should contain container element', () => {
        const result = render(<MicroFrontendWrapper name="test" url="http://localhost:5001" />);
        const container = result.container.querySelector('.mfe-wrapper');

        expect(container).toBeInTheDocument();
    });

    it('loads and renders microfrontend script', async () => {
        window.mountTestMfe = jest.fn();
        render(<MicroFrontendWrapper name="test" url="http://localhost:5001" />);

        await waitFor(() => {
            const script = document.querySelector('script');
            fireEvent.load(script);

            expect(window.mountTestMfe).toHaveBeenCalledTimes(1);
        });

        delete window.mountTestMfe;
    });
});
