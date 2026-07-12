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
const LabelPairedBellSlashSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 22, viewBox: '0 0 18 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.29 3.914 5.335 7.06c.629-.957 1.613-1.668 2.789-1.887v-.547c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875v.547c1.996.383 3.5 2.16 3.5 4.266v.519c0 1.285.465 2.543 1.313 3.5l.19.219c.247.273.302.629.165.957 0 0-.027 0-.027.027l2.46 1.942c.301.218.356.628.11.902a.604.604 0 0 1-.902.11L.496 4.925a.604.604 0 0 1-.11-.903.604.604 0 0 1 .903-.109m10.062 11.211H3.75c-.355 0-.684-.191-.82-.492a.89.89 0 0 1 .164-.957l.191-.219a5.32 5.32 0 0 0 1.34-3.5v-.11zm-1.122 2.133A1.71 1.71 0 0 1 9 17.75c-.465 0-.93-.164-1.258-.492S7.25 16.465 7.25 16h3.5c0 .465-.191.93-.52 1.258' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '31a00eb519ca3a7fb40b439cf7d49f2c__a' },
            React.createElement("path", { d: 'M0 0h18v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedBellSlashSmFillIcon);
exports.default = ForwardRef;
