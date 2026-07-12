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
const LabelPairedTwoCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 8, height: 18, viewBox: '0 0 8 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3.719 5c-.68 0-1.336.281-1.828.75l-.633.656a.397.397 0 0 1-.54 0 .397.397 0 0 1 0-.539l.657-.633a3.24 3.24 0 0 1 2.344-.984C5.5 4.25 7 5.703 7 7.508c0 .914-.375 1.758-1.031 2.39L1.563 14h5.812c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H.625a.36.36 0 0 1-.352-.234.325.325 0 0 1 .094-.399l5.086-4.781a2.54 2.54 0 0 0 .797-1.828C6.25 6.125 5.102 5 3.719 5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '544410a179bf115893e4c593ad7ab849__a' },
            React.createElement("path", { d: 'M0 0h8v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedTwoCaptionRegularIcon);
exports.default = ForwardRef;
