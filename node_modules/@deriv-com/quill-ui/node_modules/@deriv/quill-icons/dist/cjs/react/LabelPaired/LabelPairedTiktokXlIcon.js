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
const LabelPairedTiktokXlIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 21, height: 36, viewBox: '0 0 21 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M21 15.844c-2.11.047-4.078-.61-5.766-1.828v8.39c0 3.188-1.968 6-4.968 7.125-2.953 1.125-6.328.282-8.391-2.11a7.68 7.68 0 0 1-.984-8.671c1.5-2.766 4.593-4.312 7.78-3.89v4.218a3.54 3.54 0 0 0-3.937 1.266c-.843 1.265-.843 2.906.047 4.125s2.485 1.734 3.89 1.265a3.52 3.52 0 0 0 2.438-3.328V6h4.125c0 .375 0 .703.094 1.078a5.54 5.54 0 0 0 2.531 3.75c.891.61 2.016.938 3.141.938z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '676d77d47b0bd624afaf0cc078127345__a' },
            React.createElement("path", { d: 'M0 0h21v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedTiktokXlIcon);
exports.default = ForwardRef;
