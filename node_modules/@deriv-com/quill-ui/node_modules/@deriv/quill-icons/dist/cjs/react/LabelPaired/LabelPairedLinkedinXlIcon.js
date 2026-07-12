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
const LabelPairedLinkedinXlIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 21, height: 36, viewBox: '0 0 21 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M19.5 7.5c.797 0 1.5.703 1.5 1.547V27c0 .844-.703 1.5-1.5 1.5H1.453C.656 28.5 0 27.844 0 27V9.047C0 8.203.656 7.5 1.453 7.5zm-13.172 18v-9.984H3.234V25.5zM4.781 14.11a1.78 1.78 0 0 0 1.782-1.782c0-.984-.797-1.828-1.782-1.828a1.83 1.83 0 0 0-1.828 1.828c0 .985.797 1.781 1.828 1.781M18 25.5v-5.484c0-2.672-.61-4.782-3.75-4.782-1.5 0-2.531.844-2.953 1.641h-.047v-1.36H8.297V25.5h3.094v-4.922c0-1.312.234-2.578 1.875-2.578 1.593 0 1.593 1.5 1.593 2.625V25.5z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '11dced23da7c16300827eea137f7004d__a' },
            React.createElement("path", { d: 'M0 0h21v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedLinkedinXlIcon);
exports.default = ForwardRef;
