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
const LabelPairedChartLineCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.125 4.813v8.25c0 .328.234.562.563.562h9.75a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562h-9.75A1.68 1.68 0 0 1 0 13.063v-8.25c0-.305.234-.563.563-.563a.57.57 0 0 1 .562.563m9.96 2.648-3.21 3.187a.513.513 0 0 1-.773 0L5.25 8.797l-1.852 1.851c-.234.235-.586.235-.796 0a.513.513 0 0 1 0-.773l2.25-2.25c.093-.117.234-.164.398-.164.14 0 .281.047.398.164L7.5 9.477l2.79-2.79c.21-.234.562-.234.796 0a.55.55 0 0 1 0 .774' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '5d1ac945709a551ddae03e116c53ef04__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChartLineCaptionBoldIcon);
exports.default = ForwardRef;
