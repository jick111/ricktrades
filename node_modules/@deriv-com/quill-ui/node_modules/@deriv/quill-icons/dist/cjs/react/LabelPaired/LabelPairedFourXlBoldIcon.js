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
const LabelPairedFourXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 36, viewBox: '0 0 18 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M8.86 9.188 2.952 20.25h9.797v-7.125c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125v7.125h1.875c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125H15v4.875a1.11 1.11 0 0 1-1.125 1.125c-.656 0-1.125-.469-1.125-1.125V22.5H1.125c-.422 0-.797-.187-.984-.516a1.19 1.19 0 0 1-.047-1.125l6.75-12.75c.328-.515.984-.75 1.547-.468.515.28.75.984.468 1.547' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'a0fbdf718f7d9646631de493eea44bf5__a' },
            React.createElement("path", { d: 'M0 0h18v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFourXlBoldIcon);
exports.default = ForwardRef;
