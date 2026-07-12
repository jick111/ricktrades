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
const LabelPairedChartLineUpDownCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.75 4.625v8.25A1.11 1.11 0 0 0 1.875 14h9.75c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-9.75A1.85 1.85 0 0 1 0 12.875v-8.25c0-.187.164-.375.375-.375.188 0 .375.188.375.375M8.625 5.75a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375h2.25c.188 0 .375.188.375.375v2.25c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V6.289L7.008 9.781a.397.397 0 0 1-.54 0L4.876 8.164l-1.992 1.992a.397.397 0 0 1-.54 0 .397.397 0 0 1 0-.539l2.25-2.25a.39.39 0 0 1 .282-.117c.094 0 .188.047.258.117L6.75 8.984 9.96 5.75zm0 6.75a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375h1.336l-1.617-1.594.539-.539 1.617 1.617V9.875c0-.187.164-.375.375-.375.188 0 .375.188.375.375v2.25c0 .21-.187.375-.375.375z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'abc52b5bdbd3e5596505e8290aeac383__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChartLineUpDownCaptionRegularIcon);
exports.default = ForwardRef;
