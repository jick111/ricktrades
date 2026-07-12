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
const LabelPairedBullhornMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M15 5v4.625c.563.281 1 1.031 1 1.875 0 .875-.437 1.625-1 1.906V18c0 .406-.25.781-.625.938a1.01 1.01 0 0 1-1.094-.22l-1.375-1.374A8 8 0 0 0 6.25 15H6v4c0 .563-.469 1-1 1H3c-.562 0-1-.437-1-1v-4c-1.125 0-2-.875-2-2v-3c0-1.094.875-2 2-2h4.25a8 8 0 0 0 5.656-2.344l1.375-1.343a1.01 1.01 0 0 1 1.094-.22c.375.157.625.532.625.907m-2 2.406C11.156 9.094 8.75 10 6.25 10H6v3h.25c2.5 0 4.906.938 6.75 2.625V7.406' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '85d021650a5e4a611f0ab6719cc2661d__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedBullhornMdFillIcon);
exports.default = ForwardRef;
