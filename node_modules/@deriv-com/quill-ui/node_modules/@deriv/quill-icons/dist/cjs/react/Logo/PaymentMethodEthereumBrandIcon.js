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
const PaymentMethodEthereumBrandIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 128 80', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#828CAD', d: 'm6 39.497 9.222 5.457V24.186z' }),
    React.createElement("path", { fill: '#63688E', d: 'M15.222 24.186v20.768l9.234-5.457z' }),
    React.createElement("path", { fill: '#8A93B3', d: 'm6 41.253 9.222 13.001v-7.557z' }),
    React.createElement("path", { fill: '#63688E', d: 'M15.222 46.697v7.557l9.234-13z' }),
    React.createElement("path", { fill: '#63688E', d: 'M15.222 35.309 6 39.498l9.222 5.456v-9.646', opacity: 0.6 }),
    React.createElement("path", { fill: '#474A75', d: 'M15.222 35.309v9.645l9.233-5.456z', opacity: 0.6 }),
    React.createElement("g", { fill: '#63688E' },
        React.createElement("path", { d: 'M53.5 29.75a.75.75 0 0 1 .75.75v7.26a4.25 4.25 0 0 1 7 3.24v4.5a.75.75 0 0 1-1.5 0V41a2.75 2.75 0 1 0-5.5 0v4.5a.75.75 0 0 1-1.5 0v-15a.75.75 0 0 1 .75-.75M111 36.75c-1.049 0-2.009.38-2.75 1.01v-.26a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0V41a2.75 2.75 0 1 1 5.5 0v4.5a.75.75 0 0 0 1.5 0V41a2.75 2.75 0 1 1 5.5 0v4.5a.75.75 0 0 0 1.5 0V41a4.25 4.25 0 0 0-7.75-2.412 4.25 4.25 0 0 0-3.5-1.838M96.75 37.5a.75.75 0 0 0-1.5 0V42a4.25 4.25 0 0 0 7 3.24v.26a.75.75 0 0 0 1.5 0v-8a.75.75 0 0 0-1.5 0V42a2.75 2.75 0 1 1-5.5 0zM76.75 37.5v8a.75.75 0 0 0 1.5 0v-4.925l.007-.03a3.62 3.62 0 0 1 .492-1.129c.393-.59 1.055-1.166 2.251-1.166a.75.75 0 0 0 0-1.5c-1.22 0-2.112.422-2.75.977V37.5a.75.75 0 0 0-1.5 0M47.25 34.5a.75.75 0 0 0-1.5 0v2.25H44a.75.75 0 0 0 0 1.5h1.75v7.25a.75.75 0 0 0 1.5 0v-7.25H49a.75.75 0 0 0 0-1.5h-1.75z' }),
        React.createElement("path", { fillRule: 'evenodd', d: 'M36.253 36.81a4.75 4.75 0 1 0 3.067 7.513.75.75 0 1 0-1.206-.891 3.25 3.25 0 0 1-5.776-1.182H39.5a.75.75 0 0 0 .75-.75 4.75 4.75 0 0 0-3.997-4.69m2.41 3.94h-6.325q.031-.135.075-.267a3.25 3.25 0 0 1 6.25.267M67.03 37.442a4.75 4.75 0 0 1 7.22 4.058v.75h-7.912q.058.243.153.478a3.25 3.25 0 0 0 5.623.704.75.75 0 1 1 1.206.891 4.75 4.75 0 1 1-6.29-6.88m-.692 3.308h6.324a3.25 3.25 0 0 0-6.324 0M89.253 36.81a4.75 4.75 0 1 0 3.067 7.513.75.75 0 1 0-1.206-.891 3.25 3.25 0 0 1-5.776-1.182h7.912v-.75a4.75 4.75 0 0 0-3.997-4.69m2.41 3.94h-6.325q.032-.135.075-.267a3.25 3.25 0 0 1 6.25.267', clipRule: 'evenodd' }))));
const ForwardRef = (0, react_1.forwardRef)(PaymentMethodEthereumBrandIcon);
exports.default = ForwardRef;
