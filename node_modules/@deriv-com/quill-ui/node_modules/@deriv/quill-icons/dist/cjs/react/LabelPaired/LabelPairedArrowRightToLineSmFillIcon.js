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
const LabelPairedArrowRightToLineSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 22, viewBox: '0 0 13 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M12.625 6.375v8.75c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875v-8.75c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875m-3.773 5.004-3.5 3.5a.843.843 0 0 1-1.23 0 .843.843 0 0 1 0-1.23l1.995-2.024H1.25a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875h4.867L4.121 7.879a.843.843 0 0 1 0-1.23.843.843 0 0 1 1.23 0l3.5 3.5a.843.843 0 0 1 0 1.23' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '2e43566dfb99cde1372ff026179c7a21__a' },
            React.createElement("path", { d: 'M0 0h13v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowRightToLineSmFillIcon);
exports.default = ForwardRef;
