import React from 'react';
import { Side } from './Side';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Side', () => {

    it('should show children', async () => {
        render(<Side>Barn</Side>);
        expect(screen.getByText('Barn'))
    })

})
