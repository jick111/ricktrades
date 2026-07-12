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
const LabelPairedObjectsAlignLeftSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 4.406c0-.355.273-.656.656-.656.356 0 .657.3.657.656v12.688c0 .383-.301.656-.657.656A.63.63 0 0 1 0 17.094zm4.813 4.157h7.875v-1.75H4.812zM3.5 6.813c0-.711.574-1.313 1.313-1.313h7.875c.71 0 1.312.602 1.312 1.313v1.75c0 .738-.602 1.312-1.312 1.312H4.812A1.296 1.296 0 0 1 3.5 8.563zm1.313 7.875h4.375v-1.75H4.812zM3.5 12.938c0-.711.574-1.313 1.313-1.313h4.375c.71 0 1.312.602 1.312 1.313v1.75c0 .738-.602 1.312-1.312 1.312H4.812A1.296 1.296 0 0 1 3.5 14.688z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '4e1d4573cf85b5b236c228aec5737dbf__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedObjectsAlignLeftSmBoldIcon);
exports.default = ForwardRef;
