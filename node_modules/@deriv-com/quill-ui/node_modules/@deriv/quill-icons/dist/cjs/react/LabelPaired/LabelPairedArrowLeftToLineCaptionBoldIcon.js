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
const LabelPairedArrowLeftToLineCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 11, height: 18, viewBox: '0 0 11 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.25 13.438V5.562C.25 5.259.484 5 .813 5a.57.57 0 0 1 .562.563v7.875A.555.555 0 0 1 .813 14a.54.54 0 0 1-.563-.562m3.164-4.336 3.188-3c.234-.211.585-.211.796.023s.211.586-.023.797L5.219 8.938h4.968a.57.57 0 0 1 .563.562.555.555 0 0 1-.562.563h-4.97l2.157 2.039c.234.21.234.562.023.796-.21.235-.562.235-.796.024l-3.188-3A.56.56 0 0 1 3.25 9.5c0-.14.047-.305.164-.398' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '6b6e1c02505da9ef30f41f8c48784321__a' },
            React.createElement("path", { d: 'M0 0h11v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowLeftToLineCaptionBoldIcon);
exports.default = ForwardRef;
