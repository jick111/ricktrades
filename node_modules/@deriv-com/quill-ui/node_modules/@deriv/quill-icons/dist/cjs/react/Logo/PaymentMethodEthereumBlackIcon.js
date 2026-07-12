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
const React = __importStar(require("react"));
const react_1 = require("react");
const PaymentMethodEthereumBlackIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 128 80', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: '#000' },
        React.createElement("path", { d: 'm6 39.498 9.222 5.456 9.233-5.456-9.233-15.312z' }),
        React.createElement("path", { d: 'm6 41.253 9.222 13.001 9.234-13-9.234 5.443zM54.25 30.5a.75.75 0 0 0-1.5 0v15a.75.75 0 0 0 1.5 0V41a2.75 2.75 0 1 1 5.5 0v4.5a.75.75 0 0 0 1.5 0V41a4.25 4.25 0 0 0-7-3.24zM108.25 37.76a4.23 4.23 0 0 1 2.75-1.01c1.452 0 2.733.728 3.5 1.838A4.25 4.25 0 0 1 122.25 41v4.5a.75.75 0 0 1-1.5 0V41a2.75 2.75 0 1 0-5.5 0v4.5a.75.75 0 0 1-1.5 0V41a2.75 2.75 0 1 0-5.5 0v4.5a.75.75 0 0 1-1.5 0v-8a.75.75 0 0 1 1.5 0zM96.75 37.5a.75.75 0 0 0-1.5 0V42a4.25 4.25 0 0 0 7 3.24v.26a.75.75 0 0 0 1.5 0v-8a.75.75 0 0 0-1.5 0V42a2.75 2.75 0 1 1-5.5 0zM76.75 40.488V37.5a.75.75 0 0 1 1.5 0v.227c.638-.555 1.53-.977 2.75-.977a.75.75 0 0 1 0 1.5c-1.196 0-1.858.576-2.25 1.166a3.6 3.6 0 0 0-.493 1.129l-.007.03V45.5a.75.75 0 0 1-1.5 0v-5.012M47.25 34.5a.75.75 0 0 0-1.5 0v2.25H44a.75.75 0 0 0 0 1.5h1.75v7.25a.75.75 0 0 0 1.5 0v-7.25H49a.75.75 0 0 0 0-1.5h-1.75z' }),
        React.createElement("path", { fillRule: 'evenodd', d: 'M33.03 37.442a4.75 4.75 0 0 1 7.22 4.058.75.75 0 0 1-.75.75h-7.162q.058.243.153.478a3.25 3.25 0 0 0 5.623.704.75.75 0 1 1 1.206.891 4.75 4.75 0 1 1-6.29-6.88m-.692 3.308h6.324a3.25 3.25 0 0 0-6.324 0M67.03 37.442a4.75 4.75 0 0 1 7.22 4.058v.75h-7.912q.058.243.153.478a3.25 3.25 0 0 0 5.623.704.75.75 0 1 1 1.206.891 4.75 4.75 0 1 1-6.29-6.88m-.692 3.308h6.324a3.25 3.25 0 0 0-6.324 0M86.03 37.442a4.75 4.75 0 0 1 7.22 4.058v.75h-7.912q.058.243.153.478a3.25 3.25 0 0 0 5.623.704.75.75 0 1 1 1.206.891 4.75 4.75 0 1 1-6.29-6.88m-.692 3.308h6.324a3.25 3.25 0 0 0-6.324 0', clipRule: 'evenodd' }))));
const ForwardRef = (0, react_1.forwardRef)(PaymentMethodEthereumBlackIcon);
exports.default = ForwardRef;
