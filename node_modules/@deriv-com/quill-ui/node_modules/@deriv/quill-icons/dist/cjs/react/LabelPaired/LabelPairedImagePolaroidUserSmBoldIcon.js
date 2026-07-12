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
const LabelPairedImagePolaroidUserSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 22, viewBox: '0 0 13 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.688 15.125c0 .246.19.438.437.438h8.75a.45.45 0 0 0 .438-.438v-1.312H1.688zm7.82-2.625h1.805V6.375a.47.47 0 0 0-.438-.437h-8.75a.45.45 0 0 0-.437.437V12.5h1.804a1.76 1.76 0 0 1 1.696-1.312h2.625c.792 0 1.476.574 1.695 1.312m3.117-6.125v8.75c0 .984-.793 1.75-1.75 1.75h-8.75c-.984 0-1.75-.766-1.75-1.75v-8.75c0-.957.766-1.75 1.75-1.75h8.75c.957 0 1.75.793 1.75 1.75M4.75 8.563c0-.602.328-1.176.875-1.504.52-.301 1.203-.301 1.75 0 .52.328.875.902.875 1.503 0 .63-.355 1.204-.875 1.532-.547.3-1.23.3-1.75 0a1.78 1.78 0 0 1-.875-1.531' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '34a737965fed7c1fba10717fb3713025__a' },
            React.createElement("path", { d: 'M0 0h13v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedImagePolaroidUserSmBoldIcon);
exports.default = ForwardRef;
