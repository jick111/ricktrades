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
const LabelPairedGrid2SmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.188 5.938v2.625h2.625V5.937zm-1.313 0c0-.711.574-1.313 1.313-1.313h2.625c.71 0 1.312.602 1.312 1.313v2.625c0 .738-.602 1.312-1.312 1.312H2.188A1.296 1.296 0 0 1 .875 8.563zm1.313 7v2.624h2.625v-2.624zm-1.313 0c0-.711.574-1.313 1.313-1.313h2.625c.71 0 1.312.602 1.312 1.313v2.624c0 .739-.602 1.313-1.312 1.313H2.188a1.296 1.296 0 0 1-1.313-1.312zm10.938-7H9.187v2.625h2.626zM9.187 4.625h2.626c.71 0 1.312.602 1.312 1.313v2.625c0 .738-.602 1.312-1.312 1.312H9.187a1.296 1.296 0 0 1-1.312-1.312V5.937c0-.71.574-1.312 1.313-1.312m0 8.313v2.624h2.626v-2.624zm-1.312 0c0-.711.574-1.313 1.313-1.313h2.624c.711 0 1.313.602 1.313 1.313v2.624c0 .739-.602 1.313-1.312 1.313H9.187a1.296 1.296 0 0 1-1.312-1.312z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'defc1dbf18006aefe6802ee310b28134__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedGrid2SmBoldIcon);
exports.default = ForwardRef;
