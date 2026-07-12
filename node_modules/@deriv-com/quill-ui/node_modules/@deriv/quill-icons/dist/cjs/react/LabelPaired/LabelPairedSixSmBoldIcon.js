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
const LabelPairedSixSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 9, height: 22, viewBox: '0 0 9 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M7.563 12.5c0-1.668-1.395-3.062-3.063-3.062a3 3 0 0 0-2.242.984l-.137.164a2.94 2.94 0 0 0-.683 1.914A3.057 3.057 0 0 0 4.5 15.563 3.075 3.075 0 0 0 7.563 12.5M4.09 8.152c.137 0 .273-.027.41-.027A4.39 4.39 0 0 1 8.875 12.5 4.37 4.37 0 0 1 4.5 16.875 4.353 4.353 0 0 1 .125 12.5c0-1.121.41-2.16 1.121-2.926l3.828-4.703a.65.65 0 0 1 .93-.082.65.65 0 0 1 .082.93z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '405253e436ef6dfa4afbe779c67ada5d__a' },
            React.createElement("path", { d: 'M0 0h9v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedSixSmBoldIcon);
exports.default = ForwardRef;
