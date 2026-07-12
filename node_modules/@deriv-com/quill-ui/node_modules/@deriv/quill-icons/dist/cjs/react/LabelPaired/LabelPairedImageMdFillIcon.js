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
const LabelPairedImageMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 7c0-1.094.875-2 2-2h12c1.094 0 2 .906 2 2v10c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2zm10.094 3.344A.71.71 0 0 0 9.5 10a.72.72 0 0 0-.625.344l-2.719 4-.843-1.063A.76.76 0 0 0 4.75 13a.77.77 0 0 0-.594.281l-2 2.5a.78.78 0 0 0-.094.813c.126.25.376.406.688.406h10.5c.25 0 .531-.125.656-.375a.78.78 0 0 0-.062-.781zM3.5 10c.531 0 1-.281 1.281-.75.282-.437.282-1.031 0-1.5C4.5 7.313 4.031 7 3.5 7c-.562 0-1.031.313-1.312.75-.282.469-.282 1.063 0 1.5.28.469.75.75 1.312.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '95a9e7bdd112584c9534010342d30481__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedImageMdFillIcon);
exports.default = ForwardRef;
