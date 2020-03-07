'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _middleware = require('../middleware');

var _middleware2 = _interopRequireDefault(_middleware);

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

var _ = require('..');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express2.default)();

// Connecting to the db
(0, _db2.default)(function (db) {
    // internal middleware
    router.use((0, _middleware2.default)({ config: _config2.default, db: db }));

    // API routes
});

exports.default = router;
//# sourceMappingURL=index.js.map