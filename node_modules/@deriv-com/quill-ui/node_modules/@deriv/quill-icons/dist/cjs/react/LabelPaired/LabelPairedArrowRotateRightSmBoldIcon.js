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
const LabelPairedArrowRotateRightSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M12.906 9.875H8.97a.63.63 0 0 1-.656-.656c0-.356.273-.656.656-.656h2.46l-.738-.876C9.79 6.622 8.477 5.938 7 5.938a4.8 4.8 0 0 0-4.812 4.813A4.785 4.785 0 0 0 7 15.563a4.77 4.77 0 0 0 2.871-.958c.3-.218.711-.164.93.137s.164.711-.137.93A6.07 6.07 0 0 1 7 16.875 6.115 6.115 0 0 1 .875 10.75C.875 7.387 3.609 4.625 7 4.625c1.887 0 3.582.875 4.703 2.215l.547.656V5.281c0-.355.273-.656.656-.656.356 0 .656.3.656.656V9.22c0 .383-.3.656-.656.656' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '4f872468961da39a717429ee56ab5110__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowRotateRightSmBoldIcon);
exports.default = ForwardRef;
