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
const LabelPairedMobileScreenButtonSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 11, height: 22, viewBox: '0 0 11 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2 16c0 .246.191.438.438.438h6.124A.45.45 0 0 0 9 16v-2.187H2zm0-3.5h7v-7a.47.47 0 0 0-.437-.437H2.436A.45.45 0 0 0 2 5.5zm-1.312-7c0-.957.765-1.75 1.75-1.75h6.124c.958 0 1.75.793 1.75 1.75V16c0 .984-.792 1.75-1.75 1.75H2.439c-.985 0-1.75-.766-1.75-1.75zm3.937 9.188h1.75a.47.47 0 0 1 .438.437.45.45 0 0 1-.438.438h-1.75a.43.43 0 0 1-.437-.438.45.45 0 0 1 .437-.437' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '334c73f5e73b3c361d908a4a80f6f6a7__a' },
            React.createElement("path", { d: 'M0 0h11v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMobileScreenButtonSmBoldIcon);
exports.default = ForwardRef;
