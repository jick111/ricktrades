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
const LabelPairedPersonChalkboardLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 25, height: 30, viewBox: '0 0 25 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M7.5 9.25a1.87 1.87 0 0 1-1.64-.937c-.352-.547-.352-1.29 0-1.876.35-.546.937-.937 1.64-.937.664 0 1.25.39 1.602.938.351.585.351 1.328 0 1.875-.352.585-.938.937-1.602.937m-.312 15c0 .703-.586 1.25-1.25 1.25-.704 0-1.25-.547-1.25-1.25v-8.71l-1.133 1.874a1.264 1.264 0 0 1-1.72.43 1.264 1.264 0 0 1-.429-1.719l2.266-3.79c.703-1.132 1.914-1.835 3.242-1.835H12.5V7.375c0-1.016.82-1.875 1.875-1.875h8.75C24.141 5.5 25 6.36 25 7.375v8.75C25 17.18 24.14 18 23.125 18h-8.75a1.85 1.85 0 0 1-1.875-1.875V14.25H15v1.25h7.5V8H15v2.5h.625c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-5.312v11.25c0 .703-.586 1.25-1.25 1.25-.704 0-1.25-.547-1.25-1.25v-5h-.625z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '2438506ddf5bcae65cec9dc78bdc7b0e__a' },
            React.createElement("path", { d: 'M0 0h25v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPersonChalkboardLgFillIcon);
exports.default = ForwardRef;
