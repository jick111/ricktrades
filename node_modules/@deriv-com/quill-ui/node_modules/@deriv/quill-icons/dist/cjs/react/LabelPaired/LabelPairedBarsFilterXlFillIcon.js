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
const LabelPairedBarsFilterXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 21, height: 36, viewBox: '0 0 21 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 10.5C0 9.703.656 9 1.5 9h18c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-18A1.48 1.48 0 0 1 0 10.5M3 18c0-.797.656-1.5 1.5-1.5h12c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-12A1.48 1.48 0 0 1 3 18m10.5 7.5c0 .844-.703 1.5-1.5 1.5H9a1.48 1.48 0 0 1-1.5-1.5c0-.797.656-1.5 1.5-1.5h3c.797 0 1.5.703 1.5 1.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '048b76a4fd89e1b69cf2a74ce2523952__a' },
            React.createElement("path", { d: 'M0 0h21v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedBarsFilterXlFillIcon);
exports.default = ForwardRef;
