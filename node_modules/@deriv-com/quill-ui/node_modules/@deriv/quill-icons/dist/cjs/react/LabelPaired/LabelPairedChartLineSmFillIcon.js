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
const LabelPairedChartLineSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.75 5.5v9.188c0 .246.191.437.438.437h10.937A.9.9 0 0 1 14 16c0 .492-.41.875-.875.875H2.188A2.16 2.16 0 0 1 0 14.688V5.5c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875m11.102 2.379-3.5 3.5a.843.843 0 0 1-1.23 0L6.561 9.82l-2.46 2.434a.843.843 0 0 1-1.23 0 .843.843 0 0 1 0-1.23L5.933 7.96a.843.843 0 0 1 1.23 0L8.75 9.52l2.871-2.872a.843.843 0 0 1 1.23 0 .843.843 0 0 1 0 1.23' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '5a75243021f3f5b7dde40286341c942f__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChartLineSmFillIcon);
exports.default = ForwardRef;
