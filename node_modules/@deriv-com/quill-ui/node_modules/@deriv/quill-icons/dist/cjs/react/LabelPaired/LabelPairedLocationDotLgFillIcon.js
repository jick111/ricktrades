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
const LabelPairedLocationDotLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 30, viewBox: '0 0 15 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M8.398 25.031a1.178 1.178 0 0 1-1.835 0C4.57 22.492 0 16.438 0 13c0-4.14 3.36-7.5 7.5-7.5S15 8.86 15 13c0 3.438-4.57 9.492-6.602 12.031M7.5 10.5c-.898 0-1.719.508-2.187 1.25-.43.781-.43 1.758 0 2.5A2.54 2.54 0 0 0 7.5 15.5c.86 0 1.68-.469 2.148-1.25.43-.742.43-1.719 0-2.5C9.18 11.008 8.36 10.5 7.5 10.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '9c182902cde737fc43604f5085fb5ffb__a' },
            React.createElement("path", { d: 'M0 0h15v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedLocationDotLgFillIcon);
exports.default = ForwardRef;
