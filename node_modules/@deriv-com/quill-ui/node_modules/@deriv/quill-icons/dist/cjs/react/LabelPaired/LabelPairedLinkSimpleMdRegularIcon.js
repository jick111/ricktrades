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
const LabelPairedLinkSimpleMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 24, viewBox: '0 0 18 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 12c0-2.75 2.219-5 5-5h2.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H5c-2.219 0-4 1.813-4 4 0 2.219 1.781 4 4 4h2.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H5c-2.781 0-5-2.219-5-5m18 0c0 2.781-2.25 5-5 5h-2.5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5H13c2.188 0 4-1.781 4-4 0-2.187-1.812-4-4-4h-2.5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5H13c2.75 0 5 2.25 5 5m-13.25-.5h8.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-8.5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '1fa2dba6fe1f669a1e5f8b9f68763201__a' },
            React.createElement("path", { d: 'M0 0h18v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedLinkSimpleMdRegularIcon);
exports.default = ForwardRef;
