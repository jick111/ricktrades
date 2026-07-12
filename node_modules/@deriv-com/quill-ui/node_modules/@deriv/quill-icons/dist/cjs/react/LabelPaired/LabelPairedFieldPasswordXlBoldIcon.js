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
const LabelPairedFieldPasswordXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 30, height: 36, viewBox: '0 0 30 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M4.5 11.625A1.85 1.85 0 0 0 2.625 13.5v9c0 1.078.797 1.875 1.875 1.875h21a1.85 1.85 0 0 0 1.875-1.875v-9a1.88 1.88 0 0 0-1.875-1.875zM.375 13.5A4.13 4.13 0 0 1 4.5 9.375h21c2.25 0 4.125 1.875 4.125 4.125v9a4.13 4.13 0 0 1-4.125 4.125h-21A4.1 4.1 0 0 1 .375 22.5zm19.875 9.375c-.656 0-1.125-.469-1.125-1.125v-7.5c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125v7.5a1.11 1.11 0 0 1-1.125 1.125M9.375 18a1.89 1.89 0 0 1-.937 1.64c-.61.329-1.313.329-1.876 0-.609-.328-.937-.937-.937-1.64 0-.656.328-1.266.938-1.594.562-.328 1.265-.328 1.875 0 .562.328.937.938.937 1.594m4.5 0a1.89 1.89 0 0 1-.937 1.64c-.61.329-1.313.329-1.876 0-.609-.328-.937-.937-.937-1.64 0-.656.328-1.266.938-1.594.562-.328 1.265-.328 1.874 0 .563.328.938.938.938 1.594m4.5 0a1.89 1.89 0 0 1-.937 1.64c-.61.329-1.313.329-1.875 0-.61-.328-.938-.937-.938-1.64 0-.656.328-1.266.938-1.594.562-.328 1.265-.328 1.874 0 .563.328.938.938.938 1.594' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '2080295c740c2790dec385c965caec40__a' },
            React.createElement("path", { d: 'M0 0h30v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFieldPasswordXlBoldIcon);
exports.default = ForwardRef;
