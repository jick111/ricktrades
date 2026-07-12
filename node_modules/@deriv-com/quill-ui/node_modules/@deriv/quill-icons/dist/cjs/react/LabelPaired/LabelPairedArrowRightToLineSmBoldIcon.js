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
const LabelPairedArrowRightToLineSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 22, viewBox: '0 0 13 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M12.625 6.156v9.188c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656V6.156c0-.355.273-.656.656-.656.355 0 .656.3.656.656m-3.719 5.086-3.719 3.5a.68.68 0 0 1-.93-.027c-.245-.274-.245-.684.028-.93l2.516-2.379H1.03a.63.63 0 0 1-.656-.656c0-.355.273-.656.656-.656h5.77L4.285 7.742c-.273-.246-.273-.656-.027-.93.246-.273.656-.273.93-.027l3.718 3.5c.137.137.219.3.219.465a.69.69 0 0 1-.219.492' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '823705efaffdc861af3de737d5c99713__a' },
            React.createElement("path", { d: 'M0 0h13v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowRightToLineSmBoldIcon);
exports.default = ForwardRef;
