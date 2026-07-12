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
const LabelPairedArrowDownToLineSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 11, height: 22, viewBox: '0 0 11 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M10.094 16.875H.906a.63.63 0 0 1-.656-.656c0-.356.273-.657.656-.657h9.188c.355 0 .656.301.656.657 0 .383-.3.656-.656.656m-5.086-3.691-3.5-3.72a.68.68 0 0 1 .027-.929c.274-.246.684-.246.93.027l2.379 2.516V5.281c0-.355.273-.656.656-.656.355 0 .656.3.656.656v5.797l2.352-2.515c.246-.274.656-.274.93-.028.273.246.273.656.027.93l-3.5 3.719a.64.64 0 0 1-.465.191.66.66 0 0 1-.492-.191' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '925cfdfb2feb9b82f4cff5699cbef2f2__a' },
            React.createElement("path", { d: 'M0 0h11v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowDownToLineSmBoldIcon);
exports.default = ForwardRef;
