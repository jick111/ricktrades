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
const LabelPairedInfoSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 6, height: 22, viewBox: '0 0 6 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.688 5.938c0-.465.246-.875.656-1.122.383-.246.902-.246 1.312 0 .383.247.656.657.656 1.122 0 .492-.273.902-.656 1.148-.41.246-.93.246-1.312 0a1.31 1.31 0 0 1-.656-1.149M.375 9.875C.375 9.41.758 9 1.25 9H3a.9.9 0 0 1 .875.875V16h.875a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875h-3.5a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875h.875v-5.25H1.25a.864.864 0 0 1-.875-.875' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '83b36ec6e6556687477902ff68882d20__a' },
            React.createElement("path", { d: 'M0 0h6v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedInfoSmFillIcon);
exports.default = ForwardRef;
