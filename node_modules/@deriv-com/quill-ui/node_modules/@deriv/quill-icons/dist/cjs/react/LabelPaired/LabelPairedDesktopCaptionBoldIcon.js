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
const LabelPairedDesktopCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 18, viewBox: '0 0 14 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M12.25 4.625H1.75A.385.385 0 0 0 1.375 5v4.5h11.25V5a.4.4 0 0 0-.375-.375m1.5 4.875v2.25c0 .844-.68 1.5-1.5 1.5H8.781l.188 1.125h1.219a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H3.813a.54.54 0 0 1-.563-.562c0-.305.234-.563.563-.563h1.195l.187-1.125H1.75a1.48 1.48 0 0 1-1.5-1.5V5c0-.82.656-1.5 1.5-1.5h10.5c.82 0 1.5.68 1.5 1.5zM1.375 10.625v1.125c0 .21.164.375.375.375h10.5a.385.385 0 0 0 .375-.375v-1.125zm4.781 3.75H7.82l-.187-1.125h-1.29z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '3c79bfbb0722835ae50318805447b6fe__a' },
            React.createElement("path", { d: 'M0 0h14v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedDesktopCaptionBoldIcon);
exports.default = ForwardRef;
