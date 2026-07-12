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
const LabelPairedLaptopMobileSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 22, viewBox: '0 0 18 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3.75 3.75h8.75c.957 0 1.75.793 1.75 1.75v.875H12.5V5.5H3.75v6.125h6.125v2.625H2.328A2.077 2.077 0 0 1 .25 12.172c0-.3.219-.547.52-.547H2V5.5c0-.957.766-1.75 1.75-1.75M12.5 16H16V9h-3.5zm-1.75-7.437c0-.711.574-1.313 1.313-1.313h4.374c.711 0 1.313.602 1.313 1.313v7.874c0 .739-.602 1.313-1.312 1.313h-4.375a1.296 1.296 0 0 1-1.313-1.312z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '75a364b24f06d4f5d0a8ff97529b209d__a' },
            React.createElement("path", { d: 'M0 0h18v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedLaptopMobileSmFillIcon);
exports.default = ForwardRef;
