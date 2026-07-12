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
const LabelPairedOneSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 7, height: 22, viewBox: '0 0 7 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3.938 5.063V16h2.625a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H.438A.43.43 0 0 1 0 16.438.45.45 0 0 1 .438 16h2.625V5.883l-1.97 1.312a.42.42 0 0 1-.6-.136.42.42 0 0 1 .136-.602l2.625-1.75a.5.5 0 0 1 .437-.027c.137.082.247.246.247.383' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '8df0c633b72114a84084e53ef5702ed8__a' },
            React.createElement("path", { d: 'M0 0h7v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedOneSmRegularIcon);
exports.default = ForwardRef;
