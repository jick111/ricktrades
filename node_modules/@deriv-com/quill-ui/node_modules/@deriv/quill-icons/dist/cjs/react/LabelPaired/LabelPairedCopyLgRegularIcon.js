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
const LabelPairedCopyLgRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 30, viewBox: '0 0 18 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M15.25 19.25c.664 0 1.25-.547 1.25-1.25v-7.969a.63.63 0 0 0-.195-.43l-2.657-2.656a.63.63 0 0 0-.43-.195H9c-.703 0-1.25.586-1.25 1.25v10c0 .703.547 1.25 1.25 1.25zm1.914-10.547c.352.352.586.86.586 1.328V18c0 1.406-1.133 2.5-2.5 2.5H9A2.47 2.47 0 0 1 6.5 18V8c0-1.367 1.094-2.5 2.5-2.5h4.219c.469 0 .976.234 1.328.586zM2.75 10.5h2.5v1.25h-2.5c-.703 0-1.25.586-1.25 1.25v10c0 .703.547 1.25 1.25 1.25H9c.664 0 1.25-.547 1.25-1.25v-1.25h1.25V23c0 1.406-1.133 2.5-2.5 2.5H2.75A2.47 2.47 0 0 1 .25 23V13c0-1.367 1.094-2.5 2.5-2.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '982062dff68f7c9d0585ebc765ac16e9__a' },
            React.createElement("path", { d: 'M0 0h18v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCopyLgRegularIcon);
exports.default = ForwardRef;
