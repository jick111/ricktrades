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
const LabelPairedCircleArrowUpRightLgRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 30, viewBox: '0 0 20 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M10 24.25a8.63 8.63 0 0 0 7.54-4.375c1.6-2.695 1.6-6.016 0-8.75C15.976 8.43 13.124 6.75 10 6.75a8.73 8.73 0 0 0-7.578 4.375c-1.602 2.734-1.602 6.055 0 8.75C3.984 22.609 6.836 24.25 10 24.25M10 5.5c3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5m-2.187 6.25h5.312c.313 0 .625.313.625.625V18a.64.64 0 0 1-.625.625A.617.617 0 0 1 12.5 18v-4.102l-5.195 5.196a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899L11.602 13h-3.79a.617.617 0 0 1-.625-.625c0-.312.274-.625.625-.625' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'd2c5c4b0190370e3e1a57a2a54a8774a__a' },
            React.createElement("path", { d: 'M0 0h20v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCircleArrowUpRightLgRegularIcon);
exports.default = ForwardRef;
