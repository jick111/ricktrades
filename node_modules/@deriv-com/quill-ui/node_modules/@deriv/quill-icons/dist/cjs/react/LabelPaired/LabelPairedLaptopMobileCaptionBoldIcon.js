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
const LabelPairedLaptopMobileCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 18, viewBox: '0 0 15 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3 4.625A.385.385 0 0 0 2.625 5v6H8.25v1.5H1.125A1.11 1.11 0 0 1 0 11.375C0 11.188.164 11 .375 11H1.5V5c0-.82.656-1.5 1.5-1.5h7.5c.82 0 1.5.68 1.5 1.5v.75h-1.125V5a.4.4 0 0 0-.375-.375zm6 3c0-.61.492-1.125 1.125-1.125h3.75c.61 0 1.125.516 1.125 1.125v6.75c0 .633-.516 1.125-1.125 1.125h-3.75A1.11 1.11 0 0 1 9 14.375zm1.125 0v6.75h3.75v-6.75z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '90652b6f33ce6065cdb0530a87082d40__a' },
            React.createElement("path", { d: 'M0 0h15v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedLaptopMobileCaptionBoldIcon);
exports.default = ForwardRef;
