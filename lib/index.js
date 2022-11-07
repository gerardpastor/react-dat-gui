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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatString = exports.DatSelect = exports.DatNumber = exports.DatFolder = exports.DatButton = exports.DatBoolean = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./dat.gui.css");
var react_1 = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var lodash_1 = require("lodash");
var use_local_storage_state_1 = __importDefault(require("use-local-storage-state"));
function DatGui(_a) {
    var _b;
    var _c = _a.hideable, hideable = _c === void 0 ? true : _c, _d = _a.closed, defaultClosed = _d === void 0 ? false : _d, closeOnTop = _a.closeOnTop, data = _a.data, onUpdate = _a.onUpdate, children = _a.children, style = _a.style, className = _a.className, onClick = _a.onClick;
    var _e = (0, use_local_storage_state_1.default)('dat.gui.data'), storedData = _e[0], setStoredData = _e[1];
    var _f = (0, use_local_storage_state_1.default)('dat.gui.state', {
        defaultValue: {},
    }), state = _f[0], setState = _f[1];
    var closed = (_b = state['root']) !== null && _b !== void 0 ? _b : defaultClosed;
    var width = '245px';
    var _onUpdateValue = function (path, value) {
        var newData = (0, lodash_1.set)((0, lodash_1.cloneDeep)(data), path, value);
        onUpdate(newData);
        setStoredData(newData);
    };
    var _onUpdateState = function (state) {
        setState(function (oldState) { return (__assign(__assign({}, oldState), state)); });
    };
    var toggleClosed = function () {
        setState(function (oldState) { return (__assign(__assign({}, oldState), { root: !oldState['root'] })); });
    };
    (0, react_1.useEffect)(function () {
        if (!storedData)
            return;
        var mergedData = (0, lodash_1.merge)({}, data, storedData);
        onUpdate(storedData);
        setStoredData(mergedData);
    }, []);
    (0, react_1.useEffect)(function () {
        var handler = function (e) {
            if (hideable && e.key === 'h' && e.target === document.body)
                toggleClosed();
        };
        hideable && window.addEventListener('keypress', handler);
        return function () {
            window.removeEventListener('keypress', handler);
        };
    }, [hideable]);
    var renderChildren = function () {
        return (children &&
            react_1.default.Children.map(children, function (child) {
                return (0, react_1.cloneElement)(child, { data: data, _onUpdateValue: _onUpdateValue, state: state, _onUpdateState: _onUpdateState });
            }));
    };
    var closeButton = ((0, jsx_runtime_1.jsx)("div", __assign({ className: (0, classnames_1.default)('close-button', closeOnTop ? 'close-top' : 'close-bottom'), style: { width: width }, onClick: toggleClosed }, { children: closed ? 'Open Controls' : 'Close Controls' })));
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: (0, classnames_1.default)('dg', 'ac', className), style: style, onClick: onClick }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "dg main a", style: { userSelect: 'none', width: width } }, { children: [closeOnTop && closeButton, (0, jsx_runtime_1.jsx)("ul", __assign({ className: (0, classnames_1.default)({ closed: closed }) }, { children: renderChildren() })), !closeOnTop && closeButton] })) })));
}
exports.default = DatGui;
var DatBoolean_1 = require("./DatBoolean");
Object.defineProperty(exports, "DatBoolean", { enumerable: true, get: function () { return __importDefault(DatBoolean_1).default; } });
var DatButton_1 = require("./DatButton");
Object.defineProperty(exports, "DatButton", { enumerable: true, get: function () { return __importDefault(DatButton_1).default; } });
var DatFolder_1 = require("./DatFolder");
Object.defineProperty(exports, "DatFolder", { enumerable: true, get: function () { return __importDefault(DatFolder_1).default; } });
var DatNumber_1 = require("./DatNumber");
Object.defineProperty(exports, "DatNumber", { enumerable: true, get: function () { return __importDefault(DatNumber_1).default; } });
var DatSelect_1 = require("./DatSelect");
Object.defineProperty(exports, "DatSelect", { enumerable: true, get: function () { return __importDefault(DatSelect_1).default; } });
var DatString_1 = require("./DatString");
Object.defineProperty(exports, "DatString", { enumerable: true, get: function () { return __importDefault(DatString_1).default; } });
//# sourceMappingURL=index.js.map