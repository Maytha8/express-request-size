import type { Request, Response } from 'express';
import expressRequestSize from '../src';
import { expect } from 'chai';

describe('express-request-size', function() {
    const mw = expressRequestSize();
    it('should determine the size of the first request', async function() {
        const req = {
            socket: {
                bytesRead: 500,
            },
        };
        await new Promise(function(resolve) {
            const result = mw(req as Request, {} as Response, resolve);
        });
        expect(req).to.have.property('size');
        expect((req as Request).size).to.equal(500);
    });
    it('should determine the size of any subsequent requests', async function() {
        const req = {
            socket: {
                bytesRead: 1000,
            },
        };
        await new Promise(function(resolve) {
            const result = mw(req as Request, {} as Response, resolve);
        });
        expect(req).to.have.property('size');
        expect((req as Request).size).to.equal(500);
    });
});
