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
const LabelPairedImagePolaroidUserSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 22, viewBox: '0 0 13 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M9.563 14.25H1.25v.875c0 .492.383.875.875.875h8.75a.88.88 0 0 0 .875-.875v-.875zm-.055-.875h2.242v-7a.9.9 0 0 0-.875-.875h-8.75a.88.88 0 0 0-.875.875v7h2.215c.219-.984 1.094-1.75 2.16-1.75h1.75c1.04 0 1.941.766 2.133 1.75m-5.14 0h4.237c-.19-.492-.683-.875-1.23-.875h-1.75c-.574 0-1.066.383-1.258.875m8.257-7v8.75c0 .984-.793 1.75-1.75 1.75h-8.75c-.984 0-1.75-.766-1.75-1.75v-8.75c0-.957.766-1.75 1.75-1.75h8.75c.957 0 1.75.793 1.75 1.75M7.375 9a.9.9 0 0 0-.875-.875.88.88 0 0 0-.875.875c0 .492.383.875.875.875A.88.88 0 0 0 7.375 9M6.5 7.25c.602 0 1.176.355 1.504.875.3.547.3 1.23 0 1.75a1.77 1.77 0 0 1-1.504.875 1.78 1.78 0 0 1-1.531-.875c-.301-.52-.301-1.203 0-1.75.328-.52.902-.875 1.531-.875' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '6b345a09cb4a1d337976ce02d623354a__a' },
            React.createElement("path", { d: 'M0 0h13v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedImagePolaroidUserSmRegularIcon);
exports.default = ForwardRef;
