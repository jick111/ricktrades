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
const LabelPairedHouseBlankXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 27, height: 36, viewBox: '0 0 27 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M12.984 6.188a.78.78 0 0 1 .985 0l12.75 11.25c.328.28.328.75.093 1.078-.28.328-.75.328-1.078.047L24 17.016v9.234c0 2.11-1.687 3.75-3.75 3.75H6.75C4.64 30 3 28.36 3 26.25v-9.234l-1.781 1.547c-.282.28-.797.28-1.031-.047-.282-.328-.282-.797.046-1.078zM4.5 15.703V26.25c0 1.266.984 2.25 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25V15.703l-9-7.922z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '91c321cf50e7da8a1d61368bcb95f694__a' },
            React.createElement("path", { d: 'M0 0h27v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedHouseBlankXlRegularIcon);
exports.default = ForwardRef;
