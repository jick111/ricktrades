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
const LabelPairedExclamationMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 2, height: 24, viewBox: '0 0 2 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2 6v8c0 .563-.469 1-1 1-.562 0-1-.437-1-1V6c0-.531.438-1 1-1 .531 0 1 .469 1 1M1 19c-.469 0-.875-.219-1.094-.625a1.27 1.27 0 0 1 0-1.25A1.26 1.26 0 0 1 1 16.5c.438 0 .844.25 1.063.625.218.406.218.875 0 1.25A1.19 1.19 0 0 1 1 19' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'f22fb677867fbb6de373307685ee6303__a' },
            React.createElement("path", { d: 'M0 0h2v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedExclamationMdFillIcon);
exports.default = ForwardRef;
