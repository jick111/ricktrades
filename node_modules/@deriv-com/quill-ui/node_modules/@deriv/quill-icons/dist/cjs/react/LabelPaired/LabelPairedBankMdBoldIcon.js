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
const LabelPairedBankMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm8.344 4.094 7.094 3.937c.343.188.562.531.562.906C16 9.532 15.5 10 14.906 10H1.063A1.054 1.054 0 0 1 0 8.938c0-.376.188-.72.531-.907l7.094-3.937a.74.74 0 0 1 .719 0M7.125 8.5C7.031 8.375 7 8.188 7 8c0-.531.438-1 1-1 .531 0 1 .469 1 1a.87.87 0 0 1-.156.5h4.375L8 5.625 2.75 8.5zM2 11h1.5v5h2v-5H7v5h2v-5h1.5v5h2v-5H14v5h.25a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H2a.72.72 0 0 1-.75-.75A.74.74 0 0 1 2 16zm-1 7.5h14.25a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H1a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '83c8ccf0538dfb6a9bf20a811dd7709a__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedBankMdBoldIcon);
exports.default = ForwardRef;
