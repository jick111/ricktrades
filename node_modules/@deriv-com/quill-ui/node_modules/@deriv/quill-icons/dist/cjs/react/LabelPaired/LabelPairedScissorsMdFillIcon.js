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
const LabelPairedScissorsMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm8 10 4.375-4.375a2.245 2.245 0 0 1 3.219 0 .547.547 0 0 1 0 .781L6.75 15.25c.156.406.25.813.25 1.25C7 18.438 5.406 20 3.5 20A3.494 3.494 0 0 1 0 16.5C0 14.594 1.563 13 3.5 13c.438 0 .844.094 1.25.25L6 12l-1.25-1.219A3.4 3.4 0 0 1 3.5 11 3.494 3.494 0 0 1 0 7.5C0 5.594 1.563 4 3.5 4 5.406 4 7 5.594 7 7.5c0 .469-.094.875-.25 1.281zm.688 4.719 2-2 4.906 4.906a.547.547 0 0 1 0 .781 2.245 2.245 0 0 1-3.219 0zM2 7.5c0 .563.281 1.031.75 1.313.438.28 1.031.28 1.5 0C4.688 8.53 5 8.063 5 7.5c0-.531-.312-1-.75-1.281-.469-.282-1.062-.282-1.5 0C2.281 6.5 2 6.969 2 7.5M3.5 15c-.562 0-1.031.313-1.312.75-.282.469-.282 1.063 0 1.5.28.469.75.75 1.312.75.531 0 1-.281 1.281-.75.282-.437.282-1.031 0-1.5C4.5 15.313 4.031 15 3.5 15' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '55167b57df4cc5848d5a1dd8586925ba__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedScissorsMdFillIcon);
exports.default = ForwardRef;
