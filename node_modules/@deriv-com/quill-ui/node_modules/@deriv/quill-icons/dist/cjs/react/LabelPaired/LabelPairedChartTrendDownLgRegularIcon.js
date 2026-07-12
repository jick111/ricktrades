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
const LabelPairedChartTrendDownLgRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 25, height: 30, viewBox: '0 0 25 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M24.023 24.836a.64.64 0 0 1-.859-.273l-3.555-7.188H13.75c-.273 0-.469-.117-.586-.312L8.438 7.608l-6.915 3.477c-.312.156-.703 0-.859-.274a.64.64 0 0 1 .273-.859l7.5-3.75a.64.64 0 0 1 .86.274l4.805 9.648H20c.234 0 .43.156.547.352l3.75 7.5a.64.64 0 0 1-.274.859' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '033b229a3a484d3f20b932c6ae0a5757__a' },
            React.createElement("path", { d: 'M0 0h25v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChartTrendDownLgRegularIcon);
exports.default = ForwardRef;
