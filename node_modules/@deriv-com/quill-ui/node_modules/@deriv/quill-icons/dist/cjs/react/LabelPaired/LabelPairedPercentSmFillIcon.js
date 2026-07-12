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
const LabelPairedPercentSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 11, height: 22, viewBox: '0 0 11 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm10.477 7.004-8.75 8.75a.843.843 0 0 1-1.23 0 .843.843 0 0 1 0-1.23l8.75-8.75a.843.843 0 0 1 1.23 0 .843.843 0 0 1 0 1.23M3.75 7.25c0 .629-.355 1.203-.875 1.531-.547.301-1.23.301-1.75 0A1.78 1.78 0 0 1 .25 7.25c0-.602.328-1.176.875-1.504.52-.3 1.203-.3 1.75 0 .52.328.875.902.875 1.504m7 7c0 .629-.355 1.203-.875 1.531-.547.301-1.23.301-1.75 0a1.78 1.78 0 0 1-.875-1.531c0-.602.328-1.176.875-1.504.52-.3 1.203-.3 1.75 0 .52.328.875.902.875 1.504' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '581635455734970e723d86f42bb9d89e__a' },
            React.createElement("path", { d: 'M0 0h11v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPercentSmFillIcon);
exports.default = ForwardRef;
