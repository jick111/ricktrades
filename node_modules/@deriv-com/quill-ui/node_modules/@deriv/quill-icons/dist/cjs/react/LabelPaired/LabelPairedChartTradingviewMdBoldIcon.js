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
const LabelPairedChartTradingviewMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 24, viewBox: '0 0 20 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3.5 4a.76.76 0 0 1 .75.75v13.281c0 .282.188.469.469.469h11.5a.74.74 0 0 1 .75.75c0 .438-.313.75-.75.75H4.156a1.4 1.4 0 0 1-1.406-1.406V4.75A.74.74 0 0 1 3.5 4m13.25 6.25c.313.281.313.75 0 1.063l-4.875 4.874c-.5.5-1.281.5-1.781 0L9 15.063l-1.969 1.97c-.312.312-.781.312-1.062 0-.313-.282-.313-.75 0-1.063l2.125-2.125c.5-.5 1.281-.5 1.781 0L11 14.969l4.688-4.719c.312-.312.78-.312 1.062 0m-5.406-3.531c0 .375-.344.687-.719.687-.406 0-.75-.312-.75-.687s.344-.688.75-.688c.375 0 .719.313.719.688M11.906 6H13l-1.469 4h-1.094zM7 6h2.531v4h-.969V6.906H7z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'c58f99da6f9d76d1af437e6da26b43e2__a' },
            React.createElement("path", { d: 'M0 0h20v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChartTradingviewMdBoldIcon);
exports.default = ForwardRef;
