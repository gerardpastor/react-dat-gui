"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var lodash_1 = require("lodash");
var classnames_1 = __importDefault(require("classnames"));
var DatRow_1 = __importDefault(require("./DatRow"));
function DatString(_a) {
    var path = _a.path, label = _a.label, data = _a.data, _onUpdateValue = _a._onUpdateValue, className = _a.className, rest = __rest(_a, ["path", "label", "data", "_onUpdateValue", "className"]);
    var value = (0, lodash_1.get)(data, path);
    var handleChange = function (e) {
        var value = e.target.value;
        _onUpdateValue(path, value);
    };
    return ((0, jsx_runtime_1.jsx)(DatRow_1.default, __assign({ label: label !== null && label !== void 0 ? label : path, className: (0, classnames_1.default)(['string', className]) }, rest, { children: (0, jsx_runtime_1.jsx)("input", { type: "text", value: value, onChange: handleChange }) })));
}
exports.default = DatString;
//# sourceMappingURL=DatString.js.map