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
const LabelPairedPresentationScreenMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 24, viewBox: '0 0 18 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1 4h16c.531 0 1 .469 1 1 0 .563-.469 1-1 1v7c0 1.125-.906 2-2 2h-5v1.094l2.188 2.218a.964.964 0 0 1 0 1.407.964.964 0 0 1-1.407 0L9 17.937 7.188 19.72a.964.964 0 0 1-1.407 0 .964.964 0 0 1 0-1.407L8 16.095V15H3c-1.125 0-2-.875-2-2V6c-.562 0-1-.437-1-1 0-.531.438-1 1-1m2 2v7h12V6z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '24e00441951fb9c3821a0917325be74a__a' },
            React.createElement("path", { d: 'M0 0h18v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPresentationScreenMdFillIcon);
exports.default = ForwardRef;
