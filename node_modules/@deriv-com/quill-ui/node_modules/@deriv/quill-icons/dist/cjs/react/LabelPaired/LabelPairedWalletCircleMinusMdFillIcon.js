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
const LabelPairedWalletCircleMinusMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 24, viewBox: '0 0 20 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 7c0-1.094.875-2 2-2h12c.531 0 1 .469 1 1 0 .563-.469 1-1 1H2.5c-.281 0-.5.25-.5.5 0 .281.219.5.5.5H14c1.094 0 2 .906 2 2v.031c-.187 0-.344-.031-.5-.031a5.49 5.49 0 0 0-5.5 5.5c0 1.344.469 2.563 1.25 3.5H2c-1.125 0-2-.875-2-2zm11 8.5c0-2.469 2-4.5 4.5-4.5 2.469 0 4.5 2.031 4.5 4.5 0 2.5-2.031 4.5-4.5 4.5-2.5 0-4.5-2-4.5-4.5m2 0c0 .281.219.5.5.5h4c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5h-4c-.281 0-.5.25-.5.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'dd37c60a03e5e50381935c28d8ad6af6__a' },
            React.createElement("path", { d: 'M0 0h20v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedWalletCircleMinusMdFillIcon);
exports.default = ForwardRef;
