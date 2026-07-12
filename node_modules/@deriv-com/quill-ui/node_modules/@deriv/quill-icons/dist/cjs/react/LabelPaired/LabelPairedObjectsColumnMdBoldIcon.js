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
const LabelPairedObjectsColumnMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 24, viewBox: '0 0 14 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.5 6.5v5h3v-5zM0 6.5A1.5 1.5 0 0 1 1.5 5h3C5.313 5 6 5.688 6 6.5v5A1.5 1.5 0 0 1 4.5 13h-3A1.48 1.48 0 0 1 0 11.5zm9.5 6v5h3v-5zm-1.5 0A1.5 1.5 0 0 1 9.5 11h3c.813 0 1.5.688 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5h-3A1.48 1.48 0 0 1 8 17.5zm-3.5 3h-3v2h3zm-3-1.5h3c.813 0 1.5.688 1.5 1.5v2A1.5 1.5 0 0 1 4.5 19h-3A1.48 1.48 0 0 1 0 17.5v-2A1.5 1.5 0 0 1 1.5 14m8-7.5v2h3v-2zM8 6.5A1.5 1.5 0 0 1 9.5 5h3c.813 0 1.5.688 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5h-3A1.48 1.48 0 0 1 8 8.5z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '8ef51648e889ff78bbeacfbe47334fad__a' },
            React.createElement("path", { d: 'M0 0h14v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedObjectsColumnMdBoldIcon);
exports.default = ForwardRef;
