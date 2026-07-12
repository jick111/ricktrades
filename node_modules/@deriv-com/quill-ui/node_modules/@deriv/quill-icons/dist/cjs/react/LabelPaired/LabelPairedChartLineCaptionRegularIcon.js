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
const LabelPairedChartLineCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.75 4.625v8.25A1.11 1.11 0 0 0 1.875 14h9.75c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-9.75A1.85 1.85 0 0 1 0 12.875v-8.25c0-.187.164-.375.375-.375.188 0 .375.188.375.375m10.383 2.531-3.375 3.375a.397.397 0 0 1-.54 0L5.25 8.54l-2.367 2.367a.397.397 0 0 1-.54 0 .397.397 0 0 1 0-.539L4.97 7.742c.14-.14.398-.14.539 0L7.5 9.734l3.094-3.117c.14-.14.398-.14.539 0 .14.14.14.399 0 .54' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '1cde52bb74700321f72016126ff3dd55__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChartLineCaptionRegularIcon);
exports.default = ForwardRef;
