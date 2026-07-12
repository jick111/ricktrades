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
const LabelPairedMapSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 22, viewBox: '0 0 16 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M15.574 4.762c.192.11.301.328.301.52v9.187c0 .273-.191.52-.437.629l-4.594 1.75a.6.6 0 0 1-.438 0L5.375 15.18 1 16.848a.6.6 0 0 1-.602-.082c-.191-.11-.273-.328-.273-.547V7.03c0-.273.164-.492.41-.601L5.13 4.68a.6.6 0 0 1 .437 0l5.032 1.668 4.375-1.668a.6.6 0 0 1 .601.082M1.438 7.496v7.793l3.28-1.258V6.238zm8.53 7.82V7.523L6.032 6.211v7.793zm1.313-.027 3.281-1.258V6.238l-3.28 1.258z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '8bf93c74b57eb8f8d8c6896b3654e419__a' },
            React.createElement("path", { d: 'M0 0h16v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMapSmBoldIcon);
exports.default = ForwardRef;
