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
const LabelPairedFileCheckLgBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 30, viewBox: '0 0 15 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.5 23.625h10a.64.64 0 0 0 .625-.625V11.75H10c-.703 0-1.25-.547-1.25-1.25V7.375H2.5A.64.64 0 0 0 1.875 8v15c0 .352.273.625.625.625M2.5 5.5h6.445c.664 0 1.29.273 1.758.742l3.555 3.555c.469.469.742 1.094.742 1.758V23c0 1.406-1.133 2.5-2.5 2.5h-10A2.47 2.47 0 0 1 0 23V8c0-1.367 1.094-2.5 2.5-2.5m8.79 10.469-4.18 4.18a.97.97 0 0 1-1.329 0l-2.07-2.11c-.39-.352-.39-.937 0-1.328.352-.352.937-.352 1.328 0l1.406 1.445 3.516-3.515c.351-.352.937-.352 1.328 0a.97.97 0 0 1 0 1.328' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '9055883f65df4987afd598640d4ef117__a' },
            React.createElement("path", { d: 'M0 0h15v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFileCheckLgBoldIcon);
exports.default = ForwardRef;
