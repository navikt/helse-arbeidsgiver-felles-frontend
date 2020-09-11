import React from 'react';
import { ArbeidsgiverContext } from './ArbeidsgiverContext';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('ArbeidsgiverContext', () => {

    it('should show children', async () => {
        render(<ArbeidsgiverContext>Barn</ArbeidsgiverContext>);
        expect(screen.getByText('Barn'))
    })

})
