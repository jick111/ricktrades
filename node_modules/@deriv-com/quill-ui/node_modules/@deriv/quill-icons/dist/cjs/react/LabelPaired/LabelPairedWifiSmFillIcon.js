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
const LabelPairedWifiSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 22, viewBox: '0 0 18 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.727 9.3c-.356.356-.903.329-1.258-.027-.328-.328-.301-.902.027-1.23C2.711 5.938 5.691 4.625 9 4.625c3.281 0 6.262 1.313 8.477 3.418.328.328.355.902.027 1.23-.356.356-.902.383-1.258.028C14.36 7.496 11.816 6.375 9 6.375a10.46 10.46 0 0 0-7.273 2.926M9 10.75c-1.559 0-2.98.602-4.074 1.531a.867.867 0 0 1-1.23-.054.93.93 0 0 1 .081-1.258C5.172 9.766 7.004 9 9 9s3.8.766 5.195 1.969a.9.9 0 0 1 .082 1.258.867.867 0 0 1-1.23.054C11.953 11.351 10.53 10.75 9 10.75m1.75 4.375c0 .629-.355 1.203-.875 1.531-.547.301-1.23.301-1.75 0a1.78 1.78 0 0 1-.875-1.531c0-.602.328-1.176.875-1.504.52-.3 1.203-.3 1.75 0 .52.328.875.902.875 1.504' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '42cb8f877fbfbb736f1b653294c29114__a' },
            React.createElement("path", { d: 'M0 0h18v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedWifiSmFillIcon);
exports.default = ForwardRef;
