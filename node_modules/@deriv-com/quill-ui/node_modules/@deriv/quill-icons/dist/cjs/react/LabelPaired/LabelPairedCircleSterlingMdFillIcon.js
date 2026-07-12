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
const LabelPairedCircleSterlingMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M8 20c-2.875 0-5.5-1.5-6.937-4-1.438-2.469-1.438-5.5 0-8A8.02 8.02 0 0 1 8 4c2.844 0 5.469 1.531 6.906 4 1.438 2.5 1.438 5.531 0 8A7.94 7.94 0 0 1 8 20m.156-11a.63.63 0 0 1 .344.094l.969.375a.74.74 0 0 0 .969-.438.75.75 0 0 0-.407-.969l-.969-.374a2.2 2.2 0 0 0-.906-.188C6.812 7.5 5.72 8.625 5.72 9.969V11H5.5c-.281 0-.5.25-.5.5 0 .281.219.5.5.5h.219v.344c0 .5-.094 1.031-.344 1.5l-.312.562a.8.8 0 0 0 .03.75c.126.219.376.344.657.344h4.5a.74.74 0 0 0 .75-.75.76.76 0 0 0-.75-.75H6.938a5 5 0 0 0 .28-1.687V12H8.5c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5H7.219V9.969c0-.531.406-.969.937-.969' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '98fdc890c52f248652c9caac8006c2f5__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCircleSterlingMdFillIcon);
exports.default = ForwardRef;
