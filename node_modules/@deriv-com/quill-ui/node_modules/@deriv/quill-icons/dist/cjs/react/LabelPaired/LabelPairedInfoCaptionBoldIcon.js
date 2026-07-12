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
const LabelPairedInfoCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 5, height: 18, viewBox: '0 0 5 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.563 5.188c0-.329.164-.633.468-.797a.95.95 0 0 1 .938 0 .94.94 0 0 1 .469.797.95.95 0 0 1-.47.82.95.95 0 0 1-.937 0c-.304-.164-.469-.469-.469-.82m-.938 3c0-.305.234-.563.563-.563H2.5a.57.57 0 0 1 .563.563v6.187h1.124a.57.57 0 0 1 .563.563.555.555 0 0 1-.562.562H.813a.54.54 0 0 1-.563-.562c0-.305.234-.563.563-.563h1.125V8.75h-.75a.54.54 0 0 1-.563-.562' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '31933e7a674d19e3cf42599353666356__a' },
            React.createElement("path", { d: 'M0 0h5v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedInfoCaptionBoldIcon);
exports.default = ForwardRef;
