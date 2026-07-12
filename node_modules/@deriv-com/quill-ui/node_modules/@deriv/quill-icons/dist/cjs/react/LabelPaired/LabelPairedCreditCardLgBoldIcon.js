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
const LabelPairedCreditCardLgBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 23, height: 30, viewBox: '0 0 23 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M20.25 8.625H2.75a.64.64 0 0 0-.625.625v1.25h18.75V9.25c0-.312-.312-.625-.625-.625m.625 5.625H2.125v7.5c0 .352.273.625.625.625h17.5a.64.64 0 0 0 .625-.625zM2.75 6.75h17.5c1.367 0 2.5 1.133 2.5 2.5v12.5c0 1.406-1.133 2.5-2.5 2.5H2.75a2.47 2.47 0 0 1-2.5-2.5V9.25c0-1.367 1.094-2.5 2.5-2.5m2.188 11.875h1.875a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H4.938c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938m5 0h4.374a.95.95 0 0 1 .938.938c0 .546-.43.937-.937.937H9.936c-.546 0-.937-.39-.937-.937 0-.508.39-.938.938-.938' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'c5a6014b5082107131fd0fd5ab2ff657__a' },
            React.createElement("path", { d: 'M0 0h23v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCreditCardLgBoldIcon);
exports.default = ForwardRef;
