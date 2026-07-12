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
const LabelPairedArrowUpFromBracketLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 30, viewBox: '0 0 18 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm9.86 5.89 5 5c.507.47.507 1.29 0 1.758a1.205 1.205 0 0 1-1.758 0L10.25 9.797V18c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25V9.797l-2.89 2.851a1.205 1.205 0 0 1-1.758 0 1.205 1.205 0 0 1 0-1.757l5-5a1.205 1.205 0 0 1 1.757 0M2.75 19.25v2.5c0 .703.547 1.25 1.25 1.25h10c.664 0 1.25-.547 1.25-1.25v-2.5c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25v2.5c0 2.07-1.68 3.75-3.75 3.75H4c-2.07 0-3.75-1.68-3.75-3.75v-2.5C.25 18.586.797 18 1.5 18c.664 0 1.25.586 1.25 1.25' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '4f8cf21f815df872e30d9074ec5ecbfc__a' },
            React.createElement("path", { d: 'M0 0h18v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowUpFromBracketLgFillIcon);
exports.default = ForwardRef;
