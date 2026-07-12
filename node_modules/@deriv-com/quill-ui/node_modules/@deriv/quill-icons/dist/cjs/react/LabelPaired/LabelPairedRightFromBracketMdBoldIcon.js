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
const LabelPairedRightFromBracketMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M11 8.594v1.656a.74.74 0 0 1-.75.75H6.5v2h3.75a.76.76 0 0 1 .75.75v1.688L14.438 12zM16 12c0 .375-.156.719-.406.969l-3.625 3.625a1.44 1.44 0 0 1-1.031.406A1.414 1.414 0 0 1 9.5 15.563V14.5h-3A1.48 1.48 0 0 1 5 13v-2a1.5 1.5 0 0 1 1.5-1.5h3V8.469C9.5 7.656 10.125 7 10.938 7c.374 0 .75.156 1.03.438l3.626 3.625c.25.25.406.593.406.937M5.25 6.5h-2.5c-.719 0-1.25.563-1.25 1.25v8.5c0 .719.531 1.25 1.25 1.25h2.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-2.5A2.734 2.734 0 0 1 0 16.25v-8.5C0 6.25 1.219 5 2.75 5h2.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '9acad963e006c5ab131953ff7ca4b904__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedRightFromBracketMdBoldIcon);
exports.default = ForwardRef;
