import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Side } from './Side';

describe('Side', () => {

    it('should show children', async () => {
        render(<Side>Barn</Side>);
        expect(screen.getByText('Barn'))
    })

    it('should not show children', async () => {
        render(<Side />);
        expect(screen.queryAllByText('Barn')).toEqual([])
    })

    it('tulletest', async () => {
        expect(2+2).toEqual(4);
    })

})
