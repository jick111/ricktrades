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
const LabelPairedGrid2CaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M5.25 5.375v2.25c0 .633-.516 1.125-1.125 1.125h-2.25A1.11 1.11 0 0 1 .75 7.625v-2.25c0-.61.492-1.125 1.125-1.125h2.25c.61 0 1.125.516 1.125 1.125m0 6v2.25c0 .633-.516 1.125-1.125 1.125h-2.25A1.11 1.11 0 0 1 .75 13.625v-2.25c0-.61.492-1.125 1.125-1.125h2.25c.61 0 1.125.516 1.125 1.125m1.5-6c0-.61.492-1.125 1.125-1.125h2.25c.61 0 1.125.516 1.125 1.125v2.25c0 .633-.516 1.125-1.125 1.125h-2.25A1.11 1.11 0 0 1 6.75 7.625zm4.5 6v2.25c0 .633-.516 1.125-1.125 1.125h-2.25a1.11 1.11 0 0 1-1.125-1.125v-2.25c0-.61.492-1.125 1.125-1.125h2.25c.61 0 1.125.516 1.125 1.125' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '4942db5ad97bd891475fd1b2951cdfbc__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedGrid2CaptionFillIcon);
exports.default = ForwardRef;
