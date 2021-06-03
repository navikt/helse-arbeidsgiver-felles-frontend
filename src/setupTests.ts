import '@testing-library/jest-dom/extend-expect';
import { toHaveNoViolations } from 'jest-axe';
import 'whatwg-fetch'
import {jest} from '@jest/globals';

// Extend the functionality to support axe
expect.extend(toHaveNoViolations);
