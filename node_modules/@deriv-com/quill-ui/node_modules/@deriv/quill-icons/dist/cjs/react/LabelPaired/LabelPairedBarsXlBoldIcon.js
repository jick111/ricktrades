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
const LabelPairedBarsXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 21, height: 36, viewBox: '0 0 21 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 10.125C0 9.515.469 9 1.125 9h18.75c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125H1.125C.469 11.25 0 10.781 0 10.125m0 7.5c0-.61.469-1.125 1.125-1.125h18.75c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125H1.125C.469 18.75 0 18.281 0 17.625m21 7.5a1.11 1.11 0 0 1-1.125 1.125H1.125C.469 26.25 0 25.781 0 25.125 0 24.515.469 24 1.125 24h18.75c.61 0 1.125.516 1.125 1.125' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '84bd512558523c9c5d1b4cac62358710__a' },
            React.createElement("path", { d: 'M0 0h21v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedBarsXlBoldIcon);
exports.default = ForwardRef;
