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
const LabelPairedClapperboardPlayLgBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 30, viewBox: '0 0 20 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.875 21.75c0 .352.273.625.625.625h15a.64.64 0 0 0 .625-.625v-8.125H1.875zm11.25-10h2.5l2.5-2.5c0-.312-.312-.625-.625-.625h-1.25zm-3.75 0L12.5 8.625H10L6.875 11.75zm-6.25 0L6.25 8.625h-2.5L1.875 10.5v1.25zM20 9.25v12.5c0 1.406-1.133 2.5-2.5 2.5h-15a2.47 2.47 0 0 1-2.5-2.5V9.25c0-1.367 1.094-2.5 2.5-2.5h15c1.367 0 2.5 1.133 2.5 2.5M8.438 14.953c.195-.078.468-.078.624.04l3.75 2.5a.61.61 0 0 1 .313.507c0 .234-.117.43-.312.547l-3.75 2.5c-.157.117-.43.117-.626.039a.69.69 0 0 1-.312-.586v-5c0-.195.117-.43.313-.547' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '09247d2a3a8ff335ff4974a8d005b83a__a' },
            React.createElement("path", { d: 'M0 0h20v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedClapperboardPlayLgBoldIcon);
exports.default = ForwardRef;
