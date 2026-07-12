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
const LabelPairedCloneMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2 19h7c.531 0 1-.437 1-1v-2h1v2c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2v-7c0-1.094.875-2 2-2h2v1H2c-.562 0-1 .469-1 1v7c0 .563.438 1 1 1m5-5h7c.531 0 1-.437 1-1V6c0-.531-.469-1-1-1H7c-.562 0-1 .469-1 1v7c0 .563.438 1 1 1m-2-1V6c0-1.094.875-2 2-2h7c1.094 0 2 .906 2 2v7c0 1.125-.906 2-2 2H7c-1.125 0-2-.875-2-2' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '0e2740b004ad9dd5ea68e77437376616__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCloneMdRegularIcon);
exports.default = ForwardRef;
