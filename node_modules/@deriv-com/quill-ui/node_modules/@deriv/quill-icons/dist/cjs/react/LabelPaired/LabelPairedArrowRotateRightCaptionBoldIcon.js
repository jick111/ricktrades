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
const LabelPairedArrowRotateRightCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M11.063 8.75H7.687a.54.54 0 0 1-.562-.562c0-.305.234-.563.563-.563h2.109l-.633-.75c-.773-.914-1.898-1.5-3.164-1.5A4.116 4.116 0 0 0 1.875 9.5 4.1 4.1 0 0 0 6 13.625c.914 0 1.781-.305 2.46-.82a.564.564 0 0 1 .798.117c.187.258.14.61-.117.797A5.2 5.2 0 0 1 6 14.75 5.24 5.24 0 0 1 .75 9.5 5.256 5.256 0 0 1 6 4.25c1.617 0 3.07.75 4.031 1.898l.469.563V4.812c0-.304.234-.562.563-.562a.57.57 0 0 1 .562.563v3.375a.555.555 0 0 1-.562.562' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '43fc929f6de40fc1e4c8039eefcbd204__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowRotateRightCaptionBoldIcon);
exports.default = ForwardRef;
