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
const LabelPairedHouseBlankCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 18, viewBox: '0 0 14 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm7.352 3.64 6.187 5.25c.234.212.258.563.07.797a.584.584 0 0 1-.796.07l-.563-.491v4.359a1.866 1.866 0 0 1-1.875 1.875h-6.75a1.85 1.85 0 0 1-1.875-1.875v-4.36l-.586.493a.584.584 0 0 1-.797-.07.584.584 0 0 1 .07-.797l6.188-5.25a.6.6 0 0 1 .727 0m3.773 4.665L7 4.813 2.875 8.305v5.32c0 .422.328.75.75.75h6.75c.398 0 .75-.328.75-.75z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '1928a5e915df7ddc00368371218f099c__a' },
            React.createElement("path", { d: 'M0 0h14v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedHouseBlankCaptionBoldIcon);
exports.default = ForwardRef;
