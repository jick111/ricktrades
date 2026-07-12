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
const LabelPairedEllipsisSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 22, viewBox: '0 0 13 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M12.188 10.75c0 .492-.274.902-.657 1.148-.41.247-.93.247-1.312 0a1.31 1.31 0 0 1-.656-1.148c0-.465.246-.875.656-1.121.383-.246.902-.246 1.312 0 .383.246.656.656.656 1.121m-4.376 0c0 .492-.273.902-.656 1.148-.41.247-.93.247-1.312 0a1.31 1.31 0 0 1-.657-1.148c0-.465.247-.875.657-1.121.383-.246.902-.246 1.312 0 .383.246.657.656.657 1.121m-5.687 1.313a1.31 1.31 0 0 1-1.148-.657c-.247-.383-.247-.902 0-1.312.246-.383.656-.656 1.148-.656.465 0 .875.273 1.121.656.246.41.246.93 0 1.312-.246.41-.656.656-1.121.656' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '2d1b8b229430f9864cfdea2eb95aaeec__a' },
            React.createElement("path", { d: 'M0 0h13v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedEllipsisSmBoldIcon);
exports.default = ForwardRef;
