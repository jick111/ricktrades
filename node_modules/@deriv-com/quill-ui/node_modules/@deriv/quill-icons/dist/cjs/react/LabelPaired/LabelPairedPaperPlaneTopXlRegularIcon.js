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
const LabelPairedPaperPlaneTopXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 25, height: 36, viewBox: '0 0 25 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.64 9.703A1.57 1.57 0 0 1 .876 7.97a1.59 1.59 0 0 1 1.688-.328l21 9c.562.234.937.797.937 1.359 0 .61-.375 1.172-.937 1.406l-21 9a1.52 1.52 0 0 1-1.688-.375 1.5 1.5 0 0 1-.234-1.687L4.813 18zm5.485 9.047L2 27l19.219-8.25zm15.094-1.5L2 9l4.125 8.25z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '7278a0004ea8deccb76b3a17fe6f8462__a' },
            React.createElement("path", { d: 'M0 0h25v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPaperPlaneTopXlRegularIcon);
exports.default = ForwardRef;
