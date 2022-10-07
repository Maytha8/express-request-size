import type { RequestHandler } from 'express';

export default function() {
    // Previously written bytes
    let pastBytes = 0;
    return function expressRequestSize(req, res, next) {
        // Save pastBytes before it is reassigned
        let realPastBytes = pastBytes;
        // Reassign pastBytes to the current bytesRead
        pastBytes = req.socket.bytesRead;
        // Take the number of previously written bytes from the
        // total written bytes to get the amount of bytes
        // written for this request, which is the request size.
        // Add a custom 'size' property.
        req.size = req.socket.bytesRead - realPastBytes;
        next();
    } as RequestHandler;
}

declare global {
    namespace Express {
        interface Request {
            /** Total size of request in bytes. */
            size?: number;
        }
    }
}
