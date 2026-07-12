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
const LabelPairedMoonXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 36, viewBox: '0 0 18 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M8.906 9.14A9.01 9.01 0 0 0 1.5 18c0 5.016 3.984 9 8.953 9a9.3 9.3 0 0 0 4.406-1.125c-4.968-.422-8.906-4.64-8.906-9.75a9.74 9.74 0 0 1 2.953-6.984M12 8.157a.67.67 0 0 1-.328.797 8.22 8.22 0 0 0-4.219 7.172 8.23 8.23 0 0 0 8.25 8.25c.469 0 .938 0 1.406-.094.328-.047.657.094.797.375.14.328.094.657-.14.89a10.43 10.43 0 0 1-7.313 2.954C4.688 28.5 0 23.813 0 18 0 12.234 4.688 7.5 10.453 7.5c.281 0 .61.047.89.047.329.047.61.281.657.61' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '461b5dbf2edf034d55c4a989ba0d3ebb__a' },
            React.createElement("path", { d: 'M0 0h18v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMoonXlRegularIcon);
exports.default = ForwardRef;
