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
const LabelPairedArrowUpArrowDownCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 18, viewBox: '0 0 14 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm4.258 4.367 2.25 2.25c.14.14.14.399 0 .54a.397.397 0 0 1-.54 0L4.376 5.538v8.836c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V5.539L2.008 7.156a.397.397 0 0 1-.54 0 .397.397 0 0 1 0-.539l2.25-2.25c.141-.14.4-.14.54 0m8.25 8.04-2.25 2.25a.397.397 0 0 1-.54 0l-2.25-2.25a.397.397 0 0 1 0-.54c.141-.14.4-.14.54 0l1.617 1.617V4.625c0-.187.164-.375.375-.375.188 0 .375.188.375.375v8.86l1.594-1.618c.14-.14.398-.14.539 0 .14.14.14.399 0 .54' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '18fa682d046d46b78908c324dc8df9ce__a' },
            React.createElement("path", { d: 'M0 0h14v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowUpArrowDownCaptionRegularIcon);
exports.default = ForwardRef;
