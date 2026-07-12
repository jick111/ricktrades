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
const LabelPairedBankCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M5.695 3.57a.84.84 0 0 1 .586 0l5.25 2.25c.328.14.516.492.446.844a.73.73 0 0 1-.727.586v.188a.555.555 0 0 1-.562.562H1.313a.54.54 0 0 1-.563-.562V7.25c-.375 0-.68-.234-.75-.586a.76.76 0 0 1 .445-.844zM3 8.75v4.5h.938v-4.5h1.5v4.5h1.125v-4.5h1.5v4.5H9v-4.5h1.477v4.617c.023 0 .046 0 .046.024l1.125.75a.745.745 0 0 1 .305.843.73.73 0 0 1-.703.516H.75a.74.74 0 0 1-.727-.516.745.745 0 0 1 .305-.843l1.125-.75c0-.024.024-.024.047-.024V8.75zM6 5a.755.755 0 0 0-.75.75c0 .422.328.75.75.75.398 0 .75-.328.75-.75A.77.77 0 0 0 6 5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '24c1bb0fdc698240c19de10268df5d0b__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedBankCaptionFillIcon);
exports.default = ForwardRef;
