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
const LabelPairedTwoSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 9, height: 22, viewBox: '0 0 9 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M4.172 5.5c-.793 0-1.559.328-2.133.875l-.738.766a.463.463 0 0 1-.63 0 .463.463 0 0 1 0-.63l.767-.738a3.78 3.78 0 0 1 2.734-1.148C6.25 4.625 8 6.32 8 8.425c0 1.067-.437 2.052-1.203 2.79L1.657 16h6.78a.47.47 0 0 1 .438.438.45.45 0 0 1-.437.437H.561a.42.42 0 0 1-.41-.273.38.38 0 0 1 .11-.465l5.933-5.578c.575-.547.93-1.313.93-2.133 0-1.614-1.34-2.926-2.953-2.926' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '65aa45f99509bb895d75d941287ba1e7__a' },
            React.createElement("path", { d: 'M0 0h9v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedTwoSmRegularIcon);
exports.default = ForwardRef;
