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
const LabelPairedChartOhlcMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 24, viewBox: '0 0 20 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M10 4a.76.76 0 0 1 .75.75V6H12a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-1.25v9.75A.74.74 0 0 1 10 18a.72.72 0 0 1-.75-.75V16H8a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h1.25V4.75A.74.74 0 0 1 10 4m6.5 2a.76.76 0 0 1 .75.75v5.75h1.25a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-1.25v1.25a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75V9.5H14.5a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h1.25V6.75A.74.74 0 0 1 16.5 6m-13 4a.76.76 0 0 1 .75.75v5.75H5.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H4.25v1.25a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75V13.5H1.5a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h1.25v-1.25A.74.74 0 0 1 3.5 10' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'b3f601dd8f71663fcc04f79f8e693127__a' },
            React.createElement("path", { d: 'M0 0h20v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChartOhlcMdBoldIcon);
exports.default = ForwardRef;
