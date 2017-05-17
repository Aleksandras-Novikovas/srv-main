#!/usr/bin/env node

"use strict";

const Log = require("srv-log").Log;

const Init = require("./lib/Init");

// Initialize and start HTTP server
Init.go(function(err) {
    if (err) {
        // Initialization failure
        Log.logger.error({err: err}, "Failed to initialize");
    } else {
        // Starting HTTP server
        const HTTPServer = require("srv-server").HTTPServer;
        HTTPServer.start(function(err) {
            if (err) {
                Log.logger.error({err: err}, "Failed to start HTTP server");
            }
        });
        // Starting HTTPS server
        const HTTPSServer = require("srv-server").HTTPSServer;
        HTTPSServer.start(function(err) {
            if (err) {
                Log.logger.error({err: err}, "Failed to start HTTPS server");
            }
        });
    }
});
