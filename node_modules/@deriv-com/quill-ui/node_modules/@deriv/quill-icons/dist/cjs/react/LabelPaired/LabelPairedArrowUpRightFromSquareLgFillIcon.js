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
const LabelPairedArrowUpRightFromSquareLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 30, viewBox: '0 0 20 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M12.5 5.5h6.25c.664 0 1.25.586 1.25 1.25V13c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25V9.797l-7.89 7.851a1.205 1.205 0 0 1-1.758 0 1.205 1.205 0 0 1 0-1.757L15.703 8H12.5c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25M3.125 6.75H7.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25H3.125a.64.64 0 0 0-.625.625v12.5c0 .352.273.625.625.625h12.5a.64.64 0 0 0 .625-.625V18c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25v4.375a3.11 3.11 0 0 1-3.125 3.125h-12.5C1.367 25.5 0 24.133 0 22.375v-12.5A3.11 3.11 0 0 1 3.125 6.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'c48cfd9afbed7395561131dc2a6ebc90__a' },
            React.createElement("path", { d: 'M0 0h20v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowUpRightFromSquareLgFillIcon);
exports.default = ForwardRef;
