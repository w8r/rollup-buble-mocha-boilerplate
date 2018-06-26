"use strict";var dependency;module.watch(require('./dependency'),{dependency(v){dependency=v}},0);

module.exportDefault((n) => `${dependency()} + ${n}`);
