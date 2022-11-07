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
function DatNumber(_a) {
    var path = _a.path, label = _a.label, max = _a.max, _b = _a.min, min = _b === void 0 ? 0 : _b, _c = _a.step, step = _c === void 0 ? 1 : _c, data = _a.data, _onUpdateValue = _a._onUpdateValue, className = _a.className, rest = __rest(_a, ["path", "label", "max", "min", "step", "data", "_onUpdateValue", "className"]);
    var value = (0, lodash_1.get)(data, path);
    var hasRange = typeof max !== 'undefined';
    var percentage = hasRange ? ((value - min) / (max - min)) * 100 : 0;
    var handleChange = function (e) {
        var _a = e.target, value = _a.value, valueAsNumber = _a.valueAsNumber;
        if (value === '')
            return _onUpdateValue(path, 0);
        !isNaN(valueAsNumber) && _onUpdateValue(path, Number(valueAsNumber));
    };
    return ((0, jsx_runtime_1.jsx)(DatRow_1.default, __assign({ label: label !== null && label !== void 0 ? label : path, className: (0, classnames_1.default)(['number', { 'has-slider': hasRange }, className]) }, rest, { children: hasRange ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("input", { type: "number", min: min, max: max, step: step, value: value !== null && value !== void 0 ? value : '', onChange: handleChange }) }), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "slider" }, { children: [(0, jsx_runtime_1.jsx)("div", { className: "slider-fg", style: { width: "".concat(percentage, "%") } }), (0, jsx_runtime_1.jsx)("input", { type: "range", min: min, max: max, step: step, value: value !== null && value !== void 0 ? value : '', onChange: handleChange })] }))] })) : ((0, jsx_runtime_1.jsx)("input", { type: "number", value: value !== null && value !== void 0 ? value : '', onChange: handleChange, step: step })) })));
}
exports.default = DatNumber;
//# sourceMappingURL=DatNumber.js.map