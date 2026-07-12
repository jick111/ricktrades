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
const LabelPairedEightCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 8, height: 18, viewBox: '0 0 8 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M7.375 7.25a3 3 0 0 1-.844 2.086c.727.562 1.219 1.43 1.219 2.414 0 1.664-1.36 3-3 3h-1.5a2.99 2.99 0 0 1-3-3c0-.984.469-1.852 1.219-2.414A2.9 2.9 0 0 1 .625 7.25c0-1.64 1.336-3 3-3h.75c1.64 0 3 1.36 3 3m-3 3H3.25c-.844 0-1.5.68-1.5 1.5 0 .844.656 1.5 1.5 1.5h1.5c.82 0 1.5-.656 1.5-1.5 0-.82-.68-1.5-1.5-1.5zm0-1.5c.82 0 1.5-.656 1.5-1.5 0-.82-.68-1.5-1.5-1.5h-.75c-.844 0-1.5.68-1.5 1.5 0 .844.656 1.5 1.5 1.5z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '60bff0f58a27869e5d98572f307f8d84__a' },
            React.createElement("path", { d: 'M0 0h8v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedEightCaptionFillIcon);
exports.default = ForwardRef;
