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
const LabelPairedChartCandlestickSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.75 5.5v9.188c0 .246.191.437.438.437h10.937A.9.9 0 0 1 14 16c0 .492-.41.875-.875.875H2.188A2.16 2.16 0 0 1 0 14.688V5.5c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875m7-.437v1.312a.9.9 0 0 1 .875.875v2.625c0 .492-.41.875-.875.875v1.313a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437V10.75A.864.864 0 0 1 7 9.875V7.25c0-.465.383-.875.875-.875V5.063a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438m1.75 4.812c0-.465.383-.875.875-.875V7.688a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438V9a.9.9 0 0 1 .875.875v1.75c0 .492-.41.875-.875.875v1.313a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437V12.5a.864.864 0 0 1-.875-.875zM4.375 7.25V5.938a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438V7.25a.9.9 0 0 1 .875.875v3.5c0 .492-.41.875-.875.875v1.313a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437V12.5a.864.864 0 0 1-.875-.875v-3.5c0-.465.383-.875.875-.875' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '742ebcefeb760d09602953ed7c23dee2__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChartCandlestickSmFillIcon);
exports.default = ForwardRef;
