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
const LabelPairedOneCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 6, height: 18, viewBox: '0 0 6 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3.563 4.813v8.812h1.874a.57.57 0 0 1 .563.563.555.555 0 0 1-.562.562H.563A.54.54 0 0 1 0 14.188c0-.305.234-.563.563-.563h1.875V5.82l-1.594.985c-.258.164-.61.07-.774-.188s-.07-.61.188-.773l2.437-1.5a.54.54 0 0 1 .563-.024c.187.117.305.305.305.492' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '93405b70abd1a536b2018a153919ebdc__a' },
            React.createElement("path", { d: 'M0 0h6v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedOneCaptionBoldIcon);
exports.default = ForwardRef;
