"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketForexSgdjpyIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const MarketForexSgdjpyIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#fff', d: 'M0 12h24v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z' }),
    React.createElement("path", { fill: '#E12237', d: 'M2 4h20a2 2 0 0 1 2 2v6H0V6a2 2 0 0 1 2-2' }),
    React.createElement("path", { fill: '#fff', d: 'M4.625 6c.62 0 1.19.205 1.639.547a2.3 2.3 0 0 0-.764-.13c-1.208 0-2.187.932-2.187 2.083 0 1.15.979 2.083 2.187 2.083q.405-.002.764-.13A2.7 2.7 0 0 1 4.625 11C3.175 11 2 9.88 2 8.5S3.175 6 4.625 6m1.313 3.333c.241 0 .437.187.437.417s-.196.417-.437.417A.427.427 0 0 1 5.5 9.75c0-.23.196-.417.438-.417m1.75 0c.241 0 .437.187.437.417s-.196.417-.437.417a.427.427 0 0 1-.438-.417c0-.23.196-.417.438-.417M5.063 7.667c.241 0 .437.186.437.416s-.196.417-.437.417a.427.427 0 0 1-.438-.417c0-.23.196-.416.438-.416m3.5 0c.241 0 .437.186.437.416s-.196.417-.437.417a.427.427 0 0 1-.438-.417c0-.23.196-.416.438-.416m-1.75-1.25c.241 0 .437.186.437.416s-.196.417-.437.417a.427.427 0 0 1-.438-.417c0-.23.196-.416.438-.416' }),
    React.createElement("path", { fill: '#000', fillOpacity: 0.08, fillRule: 'evenodd', d: 'M22 5H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1M2 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#fff', d: 'M8 14a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2z' }),
    React.createElement("path", { fill: '#000', fillOpacity: 0.08, fillRule: 'evenodd', d: 'M30 13H10a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V14a1 1 0 0 0-1-1m-20-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2z', clipRule: 'evenodd' }),
    React.createElement("path", { fill: '#ED293F', d: 'M24.5 20a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0' })));
exports.MarketForexSgdjpyIcon = MarketForexSgdjpyIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.MarketForexSgdjpyIcon);
exports.default = ForwardRef;
