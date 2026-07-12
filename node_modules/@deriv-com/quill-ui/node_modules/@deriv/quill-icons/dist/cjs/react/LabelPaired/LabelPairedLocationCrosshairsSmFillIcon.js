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
const LabelPairedLocationCrosshairsSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M7 3.75a.9.9 0 0 1 .875.875v.957a5.29 5.29 0 0 1 4.293 4.293h.957a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875h-.957a5.29 5.29 0 0 1-4.293 4.32v.93c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875v-.93a5.29 5.29 0 0 1-4.32-4.32h-.93A.864.864 0 0 1 0 10.75c0-.465.383-.875.875-.875h.93a5.29 5.29 0 0 1 4.32-4.293v-.957c0-.465.383-.875.875-.875m-3.5 7a3.48 3.48 0 0 0 1.75 3.035 3.48 3.48 0 0 0 3.5 0 3.54 3.54 0 0 0 1.75-3.035c0-1.23-.684-2.379-1.75-3.008a3.48 3.48 0 0 0-3.5 0A3.47 3.47 0 0 0 3.5 10.75M7 8.563c.766 0 1.477.437 1.887 1.093.383.684.383 1.531 0 2.188-.41.683-1.121 1.094-1.887 1.094-.793 0-1.504-.41-1.914-1.094-.383-.656-.383-1.504 0-2.188C5.496 9 6.207 8.562 7 8.562' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '7579e122fa6d5371303f369c85d04c14__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedLocationCrosshairsSmFillIcon);
exports.default = ForwardRef;
