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
const LabelPairedThreeCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 8, height: 18, viewBox: '0 0 8 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.25 4.813c0-.305.234-.563.563-.563h6c.21 0 .421.14.515.375.094.21.024.445-.14.61L3.695 8.561h.961c1.688 0 3.094 1.407 3.094 3.094a3.106 3.106 0 0 1-3.094 3.094H2.523a2.46 2.46 0 0 1-2.18-1.336l-.046-.094a.555.555 0 0 1 .258-.75.555.555 0 0 1 .75.258l.047.07c.21.446.68.727 1.171.727h2.133a1.966 1.966 0 0 0 1.969-1.969 1.98 1.98 0 0 0-1.969-1.969H2.313a.59.59 0 0 1-.54-.351.59.59 0 0 1 .141-.61l3.492-3.351H.813a.54.54 0 0 1-.563-.562' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '37fcd091ac9d700f2dbca6a828dcba19__a' },
            React.createElement("path", { d: 'M0 0h8v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedThreeCaptionBoldIcon);
exports.default = ForwardRef;
