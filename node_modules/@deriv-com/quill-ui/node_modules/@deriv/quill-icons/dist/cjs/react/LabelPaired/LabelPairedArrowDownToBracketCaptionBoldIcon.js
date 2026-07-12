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
const LabelPairedArrowDownToBracketCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 11, height: 18, viewBox: '0 0 11 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm8.898 8.586-3 3c-.234.234-.585.234-.796 0l-3-3a.513.513 0 0 1 0-.774.513.513 0 0 1 .773 0l2.04 2.04v-5.79a.57.57 0 0 1 .562-.562c.328 0 .562.258.562.563v5.789l2.04-2.04c.233-.234.585-.234.796 0a.513.513 0 0 1 0 .774zm-7.523 2.976v1.876c0 .539.398.937.938.937h6.374a.925.925 0 0 0 .938-.937v-1.876c0-.304.234-.562.563-.562a.57.57 0 0 1 .562.563v1.874A2.066 2.066 0 0 1 8.688 15.5H2.311A2.05 2.05 0 0 1 .25 13.438v-1.876c0-.304.234-.562.563-.562a.57.57 0 0 1 .562.563' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '7d5e2198079a7d4eb0f77e0c21667ec1__a' },
            React.createElement("path", { d: 'M0 0h11v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowDownToBracketCaptionBoldIcon);
exports.default = ForwardRef;
