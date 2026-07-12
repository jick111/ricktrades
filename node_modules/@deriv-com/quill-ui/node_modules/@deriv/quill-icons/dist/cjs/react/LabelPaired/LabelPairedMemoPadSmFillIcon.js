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
const LabelPairedMemoPadSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 22, viewBox: '0 0 13 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.375 5.5c0-.957.766-1.75 1.75-1.75h8.75c.957 0 1.75.793 1.75 1.75v.875H.375zm0 1.75h12.25V16c0 .984-.793 1.75-1.75 1.75h-8.75c-.984 0-1.75-.766-1.75-1.75zM3 9.875c0 .246.191.438.438.438h6.124A.45.45 0 0 0 10 9.875a.47.47 0 0 0-.437-.437H3.436A.45.45 0 0 0 3 9.875M3 12.5c0 .246.191.438.438.438h6.124A.45.45 0 0 0 10 12.5a.47.47 0 0 0-.437-.437H3.436A.45.45 0 0 0 3 12.5m0 2.625c0 .246.191.438.438.438h2.625a.45.45 0 0 0 .437-.438.47.47 0 0 0-.437-.437H3.438a.45.45 0 0 0-.438.437' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '45aa1532c157712d53a6f5217167cfe7__a' },
            React.createElement("path", { d: 'M0 0h13v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMemoPadSmFillIcon);
exports.default = ForwardRef;
