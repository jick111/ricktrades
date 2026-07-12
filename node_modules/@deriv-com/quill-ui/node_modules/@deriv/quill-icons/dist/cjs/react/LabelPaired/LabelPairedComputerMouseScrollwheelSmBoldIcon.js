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
const LabelPairedComputerMouseScrollwheelSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 11, height: 22, viewBox: '0 0 11 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M9.438 13.375v-5.25c0-1.668-1.395-3.062-3.063-3.062h-1.75a3.075 3.075 0 0 0-3.062 3.062v5.25a3.057 3.057 0 0 0 3.062 3.063h1.75a3.075 3.075 0 0 0 3.063-3.063M.25 8.125A4.37 4.37 0 0 1 4.625 3.75h1.75a4.39 4.39 0 0 1 4.375 4.375v5.25a4.37 4.37 0 0 1-4.375 4.375h-1.75A4.353 4.353 0 0 1 .25 13.375zm5.25-1.75a.9.9 0 0 1 .875.875v.875c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875V7.25c0-.465.383-.875.875-.875' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '5e6b3a69242da4de9140060054e85c5c__a' },
            React.createElement("path", { d: 'M0 0h11v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedComputerMouseScrollwheelSmBoldIcon);
exports.default = ForwardRef;
