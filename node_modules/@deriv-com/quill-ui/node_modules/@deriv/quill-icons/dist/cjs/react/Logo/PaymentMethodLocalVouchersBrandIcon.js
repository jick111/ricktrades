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
const PaymentMethodLocalVouchersBrandIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 128 80', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#6F9935', d: 'M89.164 32.68v15.789l9.959-3.804L85.307 10l-56.43 22.661' }),
    React.createElement("path", { fill: '#658B30', d: 'M92.035 47.374V29.791H36.018l-4.27 1.722v1.148h57.416v15.79z' }),
    React.createElement("path", { fill: '#AAC16B', d: 'm88.178 32.68-3.41-8.775-.161-.376a10.07 10.07 0 0 1-8.792-3.768l-.359.143-30.79 12.757h43.512z' }),
    React.createElement("path", { fill: '#89B140', d: 'm51.593 29.808-6.926 2.871h43.51l-1.13-2.87z' }),
    React.createElement("path", { fill: '#79A73A', d: 'M28.877 32.68h60.287V70H28.877z' }),
    React.createElement("path", { fill: '#AAC16B', d: 'M34.619 45.167a10.07 10.07 0 0 0 6.764-6.746H76.66a10.07 10.07 0 0 0 6.764 6.764v12.327a10.07 10.07 0 0 0-6.764 6.746H41.383a10.07 10.07 0 0 0-6.764-6.764z' }),
    React.createElement("path", { fill: '#79A73A', d: 'M59.02 58.499a7.177 7.177 0 1 0 0-14.354 7.177 7.177 0 0 0 0 14.354M43.231 52.757a1.435 1.435 0 1 0 0-2.87 1.435 1.435 0 0 0 0 2.87M74.81 52.757a1.435 1.435 0 1 0 0-2.87 1.435 1.435 0 0 0 0 2.87' })));
const ForwardRef = (0, react_1.forwardRef)(PaymentMethodLocalVouchersBrandIcon);
exports.default = ForwardRef;
