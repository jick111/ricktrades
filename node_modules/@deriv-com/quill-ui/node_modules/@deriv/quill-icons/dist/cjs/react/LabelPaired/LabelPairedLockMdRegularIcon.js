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
const LabelPairedLockMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 24, viewBox: '0 0 14 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M4 8v2h6V8a3 3 0 0 0-6 0m-1 2V8c0-2.187 1.781-4 4-4 2.188 0 4 1.813 4 4v2h.5c1.375 0 2.5 1.125 2.5 2.5v5c0 1.406-1.125 2.5-2.5 2.5h-9A2.47 2.47 0 0 1 0 17.5v-5C0 11.125 1.094 10 2.5 10zm-2 2.5v5c0 .844.656 1.5 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5v-5c0-.812-.687-1.5-1.5-1.5h-9A1.5 1.5 0 0 0 1 12.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '1a24f43569f76b8520c2bb6a7cf3654b__a' },
            React.createElement("path", { d: 'M0 0h14v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedLockMdRegularIcon);
exports.default = ForwardRef;
