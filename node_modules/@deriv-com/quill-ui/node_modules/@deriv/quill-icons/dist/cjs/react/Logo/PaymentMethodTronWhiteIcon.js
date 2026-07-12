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
const PaymentMethodTronWhiteIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 128 80', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: '#fff' },
        React.createElement("path", { d: 'M111.321 49.351h2.023v-7.883l-2.023-2.249z' }),
        React.createElement("path", { d: 'M121.973 30.703V45.32l-14.309-15.903v19.935h2.018v-14.62L124 50.638V30.703zM94.566 30.694c-5.143 0-9.324 4.181-9.324 9.324s4.18 9.324 9.324 9.324c5.142 0 9.324-4.181 9.324-9.324 0-5.138-4.181-9.324-9.324-9.324m0 16.639c-4.032 0-7.315-3.278-7.315-7.315a7.32 7.32 0 0 1 7.315-7.314 7.32 7.32 0 0 1 7.314 7.314c0 4.032-3.282 7.315-7.314 7.315' }),
        React.createElement("path", { d: 'M94.566 38.677a1.341 1.341 0 1 0 0 2.683 1.341 1.341 0 0 0 0-2.683M81.733 36.424c0-3.151-2.546-5.716-5.675-5.716H65.393v18.648h1.991V32.73h8.674c2.01 0 3.644 1.657 3.644 3.693 0 2.027-1.612 3.675-3.604 3.698l-7.075-.005v9.239h1.991V42.14h4.665l3.81 7.211h2.317l-3.978-7.495c2.298-.763 3.905-2.985 3.905-5.432M52.317 36.248h-2.005v13.09h2.005zM61.297 30.703h-16.34v2.005h16.34zM55.938 36.248h-2.005v13.09h2.005zM31.173 27.01 4 22.012l14.3 35.977 19.92-24.274zm-.434 2.203 4.159 3.951-11.37 2.059zm-9.68 5.599L9.074 24.874l19.583 3.603zm-.858 1.761-1.951 16.15L7.716 26.212zm1.806.853 12.588-2.28L20.16 52.737z' }))));
const ForwardRef = (0, react_1.forwardRef)(PaymentMethodTronWhiteIcon);
exports.default = ForwardRef;
