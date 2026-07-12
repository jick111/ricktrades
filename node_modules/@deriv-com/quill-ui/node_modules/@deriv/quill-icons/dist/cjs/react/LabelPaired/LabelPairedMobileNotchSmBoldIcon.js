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
const LabelPairedMobileNotchSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 11, height: 22, viewBox: '0 0 11 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M7.25 5.063V5.5a.45.45 0 0 1-.437.438H4.188A.43.43 0 0 1 3.75 5.5v-.437h-.875A.88.88 0 0 0 2 5.938v9.625c0 .492.383.874.875.874h5.25A.88.88 0 0 0 9 15.563V5.938a.9.9 0 0 0-.875-.875zm-6.562.875c0-1.204.957-2.188 2.187-2.188h5.25c1.203 0 2.188.984 2.188 2.188v9.625c0 1.23-.985 2.187-2.188 2.187h-5.25a2.16 2.16 0 0 1-2.187-2.187z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '9966d7dac59c605878795beb2eb518fc__a' },
            React.createElement("path", { d: 'M0 0h11v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMobileNotchSmBoldIcon);
exports.default = ForwardRef;
