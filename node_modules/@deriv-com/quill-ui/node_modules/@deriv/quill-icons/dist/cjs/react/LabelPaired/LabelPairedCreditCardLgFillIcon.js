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
const LabelPairedCreditCardLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 23, height: 30, viewBox: '0 0 23 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.75 6.75h17.5c1.367 0 2.5 1.133 2.5 2.5v1.25H.25V9.25c0-1.367 1.094-2.5 2.5-2.5m20 7.5v7.5c0 1.406-1.133 2.5-2.5 2.5H2.75a2.47 2.47 0 0 1-2.5-2.5v-7.5zm-18.125 5a.64.64 0 0 0-.625.625c0 .352.273.625.625.625h2.5a.64.64 0 0 0 .625-.625c0-.312-.312-.625-.625-.625zM9 19.875c0 .352.273.625.625.625h5a.64.64 0 0 0 .625-.625c0-.312-.312-.625-.625-.625h-5a.64.64 0 0 0-.625.625' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '9b89239b9e798fcf9c7f34b5a8e61789__a' },
            React.createElement("path", { d: 'M0 0h23v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCreditCardLgFillIcon);
exports.default = ForwardRef;
