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
const LabelPairedPresentationScreenCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 18, viewBox: '0 0 14 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.625 3.5h12.75c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H.625a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375M1 5h.75v5.25c0 .422.328.75.75.75h9c.398 0 .75-.328.75-.75V5H13v5.25c0 .844-.68 1.5-1.5 1.5H7.375v.984l2.133 2.133c.14.14.14.399 0 .54a.397.397 0 0 1-.54 0L7 13.413l-1.992 1.992a.397.397 0 0 1-.54 0 .397.397 0 0 1 0-.539l2.157-2.133v-.984H2.5a1.48 1.48 0 0 1-1.5-1.5z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'fec2e8a4a9f94e12906a89b90e6edbf5__a' },
            React.createElement("path", { d: 'M0 0h14v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPresentationScreenCaptionRegularIcon);
exports.default = ForwardRef;
