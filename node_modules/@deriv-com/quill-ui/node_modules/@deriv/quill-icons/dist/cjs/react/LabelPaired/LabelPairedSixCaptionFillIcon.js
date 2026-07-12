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
const LabelPairedSixCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 8, height: 18, viewBox: '0 0 8 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm5.688 5.492-1.5 1.781C6.156 7.367 7.75 9.008 7.75 11A3.746 3.746 0 0 1 4 14.75 3.73 3.73 0 0 1 .25 11v-.094c.023-.867.328-1.71.89-2.367l3.4-4.008c.257-.328.75-.351 1.054-.093.328.257.351.75.093 1.054M6.25 11c0-.797-.445-1.523-1.125-1.945a2.27 2.27 0 0 0-2.25 0C2.172 9.477 1.75 10.203 1.75 11c0 .82.422 1.547 1.125 1.969.68.398 1.547.398 2.25 0C5.805 12.547 6.25 11.82 6.25 11' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '803571a0d24df6f8a3f6b6f861b70f26__a' },
            React.createElement("path", { d: 'M0 0h8v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedSixCaptionFillIcon);
exports.default = ForwardRef;
