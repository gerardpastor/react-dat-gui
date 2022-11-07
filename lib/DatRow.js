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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = __importDefault(require("classnames"));
function DatRow(_a) {
    var label = _a.label, _b = _a.className, className = _b === void 0 ? '' : _b, style = _a.style, onClick = _a.onClick, children = _a.children;
    return ((0, jsx_runtime_1.jsx)("li", __assign({ className: (0, classnames_1.default)('cr', className), style: style, onClick: onClick }, { children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("span", __assign({ className: "property-name" }, { children: label })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "c" }, { children: children }))] }) })));
}
exports.default = DatRow;
//# sourceMappingURL=DatRow.js.map