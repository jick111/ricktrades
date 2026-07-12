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
const LabelPairedFileLgRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 30, viewBox: '0 0 15 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M13.75 23V13H9.375A1.85 1.85 0 0 1 7.5 11.125V6.75h-5c-.703 0-1.25.586-1.25 1.25v15c0 .703.547 1.25 1.25 1.25h10c.664 0 1.25-.547 1.25-1.25m-.04-11.25c-.038-.078-.077-.195-.155-.273L9.023 6.945c-.078-.078-.195-.117-.273-.156v4.336c0 .352.273.625.625.625zM0 8c0-1.367 1.094-2.5 2.5-2.5h6.094c.469 0 .976.234 1.328.586l4.492 4.492c.352.352.586.86.586 1.328V23c0 1.406-1.133 2.5-2.5 2.5h-10A2.47 2.47 0 0 1 0 23z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '3c8067be5c7e005a0f461808aa0c0390__a' },
            React.createElement("path", { d: 'M0 0h15v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFileLgRegularIcon);
exports.default = ForwardRef;
