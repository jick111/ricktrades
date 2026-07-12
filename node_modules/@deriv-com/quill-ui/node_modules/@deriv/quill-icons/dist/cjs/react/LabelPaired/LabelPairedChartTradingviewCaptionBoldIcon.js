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
const LabelPairedChartTradingviewCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 18, viewBox: '0 0 15 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.625 3.5a.57.57 0 0 1 .563.563v9.96c0 .211.14.352.351.352h8.625c.328 0 .563.258.563.563a.54.54 0 0 1-.563.562H3.117a1.05 1.05 0 0 1-1.054-1.055V4.063c0-.305.234-.563.562-.563m9.938 4.688c.234.21.234.562 0 .796l-3.657 3.657a.934.934 0 0 1-1.336 0l-.82-.844-1.477 1.476c-.234.235-.585.235-.796 0-.235-.21-.235-.562 0-.796l1.593-1.594a.934.934 0 0 1 1.336 0l.844.844 3.516-3.54c.234-.234.586-.234.797 0M8.508 5.539c0 .281-.258.516-.54.516-.304 0-.562-.235-.562-.516s.258-.516.563-.516c.281 0 .539.235.539.516M8.93 5h.82L8.648 8h-.82zM5.25 5h1.898v3h-.726V5.68H5.25z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '04d6435fa649de9cd71a9723a56f2049__a' },
            React.createElement("path", { d: 'M0 0h15v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChartTradingviewCaptionBoldIcon);
exports.default = ForwardRef;
