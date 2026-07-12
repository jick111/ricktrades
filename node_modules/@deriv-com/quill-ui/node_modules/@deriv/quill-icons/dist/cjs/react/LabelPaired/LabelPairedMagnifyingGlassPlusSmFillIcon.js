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
const LabelPairedMagnifyingGlassPlusSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M11.375 9.438c0 1.257-.41 2.433-1.094 3.363l3.446 3.472a.843.843 0 0 1 0 1.23.843.843 0 0 1-1.23 0l-3.474-3.472c-.93.711-2.105 1.094-3.335 1.094A5.683 5.683 0 0 1 0 9.438C0 6.32 2.543 3.75 5.688 3.75c3.117 0 5.687 2.57 5.687 5.688m-6.344 2.406c0 .383.274.656.657.656a.65.65 0 0 0 .656-.656v-1.75h1.75a.65.65 0 0 0 .656-.656c0-.356-.3-.657-.656-.657h-1.75v-1.75c0-.355-.301-.656-.657-.656-.382 0-.656.3-.656.656v1.75h-1.75c-.383 0-.656.301-.656.656 0 .383.273.657.656.657h1.75z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'b2674a5275deef2faf998166a3db78b1__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMagnifyingGlassPlusSmFillIcon);
exports.default = ForwardRef;
