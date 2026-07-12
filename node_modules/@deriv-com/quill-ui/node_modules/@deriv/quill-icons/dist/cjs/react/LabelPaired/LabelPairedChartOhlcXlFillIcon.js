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
const LabelPairedChartOhlcXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 30, height: 36, viewBox: '0 0 30 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M15 6c.797 0 1.5.703 1.5 1.5V9H18c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-1.5v13.5c0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5V24H12a1.48 1.48 0 0 1-1.5-1.5c0-.797.656-1.5 1.5-1.5h1.5V7.5c0-.797.656-1.5 1.5-1.5m-9.75 9c.797 0 1.5.703 1.5 1.5V24h1.5c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-1.5v1.5c0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5V21h-1.5a1.48 1.48 0 0 1-1.5-1.5c0-.797.656-1.5 1.5-1.5h1.5v-1.5c0-.797.656-1.5 1.5-1.5m19.5-6c.797 0 1.5.703 1.5 1.5V18h1.5c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-1.5v1.5c0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5V15h-1.5a1.48 1.48 0 0 1-1.5-1.5c0-.797.656-1.5 1.5-1.5h1.5v-1.5c0-.797.656-1.5 1.5-1.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '1bbcc219ae3e2931a4f71afee0b8aaa3__a' },
            React.createElement("path", { d: 'M0 0h30v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChartOhlcXlFillIcon);
exports.default = ForwardRef;
