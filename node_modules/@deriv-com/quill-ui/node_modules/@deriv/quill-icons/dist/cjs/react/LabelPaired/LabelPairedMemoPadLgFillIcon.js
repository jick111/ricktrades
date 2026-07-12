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
const LabelPairedMemoPadLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 30, viewBox: '0 0 18 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.25 8c0-1.367 1.094-2.5 2.5-2.5h12.5c1.367 0 2.5 1.133 2.5 2.5v1.25H.25zm0 2.5h17.5V23c0 1.406-1.133 2.5-2.5 2.5H2.75A2.47 2.47 0 0 1 .25 23zM4 14.25c0 .352.273.625.625.625h8.75A.64.64 0 0 0 14 14.25c0-.312-.312-.625-.625-.625h-8.75A.64.64 0 0 0 4 14.25M4 18c0 .352.273.625.625.625h8.75A.64.64 0 0 0 14 18c0-.312-.312-.625-.625-.625h-8.75A.64.64 0 0 0 4 18m0 3.75c0 .352.273.625.625.625h3.75A.64.64 0 0 0 9 21.75c0-.312-.312-.625-.625-.625h-3.75A.64.64 0 0 0 4 21.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '364b59a6d7bc0da5b152fbae91a631ea__a' },
            React.createElement("path", { d: 'M0 0h18v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMemoPadLgFillIcon);
exports.default = ForwardRef;
