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
const LabelPairedLinkSimpleMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 24, viewBox: '0 0 18 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 12c0-2.75 2.219-5 5-5h2c.531 0 1 .469 1 1 0 .563-.469 1-1 1H5a3 3 0 0 0 0 6h2c.531 0 1 .469 1 1 0 .563-.469 1-1 1H5c-2.781 0-5-2.219-5-5m18 0c0 2.781-2.25 5-5 5h-2c-.562 0-1-.437-1-1 0-.531.438-1 1-1h2a3 3 0 0 0 0-6h-2c-.562 0-1-.437-1-1 0-.531.438-1 1-1h2c2.75 0 5 2.25 5 5M6 11h6c.531 0 1 .469 1 1 0 .563-.469 1-1 1H6c-.562 0-1-.437-1-1 0-.531.438-1 1-1' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'd431f3392ba92a24d2acb1aca2807013__a' },
            React.createElement("path", { d: 'M0 0h18v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedLinkSimpleMdFillIcon);
exports.default = ForwardRef;
