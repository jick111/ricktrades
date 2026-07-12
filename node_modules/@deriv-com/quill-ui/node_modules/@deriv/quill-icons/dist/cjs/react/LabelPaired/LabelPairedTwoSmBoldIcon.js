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
const LabelPairedTwoSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 9, height: 22, viewBox: '0 0 9 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M4.145 5.938c-.739 0-1.422.3-1.942.82l-.957.957c-.273.273-.683.273-.93 0a.6.6 0 0 1 0-.902l.957-.985a4.08 4.08 0 0 1 2.872-1.203h.19A3.9 3.9 0 0 1 8.22 8.508c0 1.066-.465 2.078-1.23 2.816l-4.567 4.239h5.797c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H.78a.69.69 0 0 1-.629-.41.69.69 0 0 1 .164-.711l5.77-5.387c.52-.492.82-1.176.82-1.86a2.567 2.567 0 0 0-2.57-2.57z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '72e9c573c818d0709f54cddabe416cfb__a' },
            React.createElement("path", { d: 'M0 0h9v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedTwoSmBoldIcon);
exports.default = ForwardRef;
