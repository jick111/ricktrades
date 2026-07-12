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
const LabelPairedAppleSmIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 11, height: 22, viewBox: '0 0 11 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M8.945 11.106c0 .054-.082 1.667 1.696 2.515-.328 1.012-1.477 3.254-2.817 3.254-.765 0-1.203-.492-2.078-.492-.902 0-1.394.492-2.078.492-1.313.055-2.57-2.406-2.926-3.418a6.5 6.5 0 0 1-.383-2.215c0-2.433 1.614-3.61 3.145-3.637.738 0 1.668.52 2.078.52.383 0 1.45-.629 2.434-.547 1.011.082 1.777.465 2.297 1.203-.903.574-1.368 1.313-1.368 2.324M7.415 6.62c-.548.629-1.204.984-1.915.93-.055-.739.219-1.422.71-1.969.438-.492 1.204-.902 1.86-.957 0 .3.082 1.121-.656 1.996' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '5bd1673e116b613a7a4c346ef0aeae84__a' },
            React.createElement("path", { d: 'M0 0h11v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedAppleSmIcon);
exports.default = ForwardRef;
