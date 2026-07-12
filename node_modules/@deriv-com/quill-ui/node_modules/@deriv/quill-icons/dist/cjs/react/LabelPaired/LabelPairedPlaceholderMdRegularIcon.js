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
const LabelPairedPlaceholderMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 24, viewBox: '0 0 14 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.75 5h.75c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-.75C1.781 6 1 6.813 1 7.75v.75c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-.75C0 6.25 1.219 5 2.75 5M.5 10c.25 0 .5.25.5.5v3c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-3c0-.25.219-.5.5-.5m13 0c.25 0 .5.25.5.5v3c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-3c0-.25.219-.5.5-.5m0-1a.494.494 0 0 1-.5-.5v-.75C13 6.813 12.188 6 11.25 6h-.75a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h.75C12.75 5 14 6.25 14 7.75v.75c0 .281-.25.5-.5.5m.5 6.5v.75c0 1.531-1.25 2.75-2.75 2.75h-.75a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h.75c.938 0 1.75-.781 1.75-1.75v-.75c0-.25.219-.5.5-.5.25 0 .5.25.5.5m-13 0v.75c0 .969.781 1.75 1.75 1.75h.75c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-.75A2.734 2.734 0 0 1 0 16.25v-.75c0-.25.219-.5.5-.5.25 0 .5.25.5.5M5.5 19a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h3c.25 0 .5.25.5.5 0 .281-.25.5-.5.5zM5 5.5c0-.25.219-.5.5-.5h3c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-3a.494.494 0 0 1-.5-.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'fbe53cdba2e64ae3c05641eeda27d85f__a' },
            React.createElement("path", { d: 'M0 0h14v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPlaceholderMdRegularIcon);
exports.default = ForwardRef;
