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
const LabelPairedChartLineUpDownMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.75 5a.76.76 0 0 1 .75.75v11c0 .438.313.75.75.75h13a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-13C1 19 0 18 0 16.75v-11A.74.74 0 0 1 .75 5m11 2.5a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h2.5c.188 0 .375.094.531.219.125.156.219.343.219.531v2.5a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75v-.687L9.531 12.53c-.312.313-.781.313-1.062 0L6.5 10.562l-1.969 1.97c-.312.312-.781.312-1.062 0a.684.684 0 0 1 0-1.032l2.5-2.5c.281-.312.75-.312 1.062 0L9 10.969 12.438 7.5zm0 8.5a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h.688l-1.47-1.469 1.063-1.062 1.469 1.469v-.688a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75v2.5a.75.75 0 0 1-.219.531.73.73 0 0 1-.531.219z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'd83a4fb4e86ba7377062afb914114347__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChartLineUpDownMdBoldIcon);
exports.default = ForwardRef;
