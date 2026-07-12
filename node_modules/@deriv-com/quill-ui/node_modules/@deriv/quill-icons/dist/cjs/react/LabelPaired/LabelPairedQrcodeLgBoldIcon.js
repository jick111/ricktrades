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
const LabelPairedQrcodeLgBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 30, viewBox: '0 0 18 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M5.875 8.625h-3.75v3.75h3.75zM2.125 6.75h3.75c1.016 0 1.875.86 1.875 1.875v3.75c0 1.055-.86 1.875-1.875 1.875h-3.75A1.85 1.85 0 0 1 .25 12.375v-3.75c0-1.016.82-1.875 1.875-1.875m3.75 11.875h-3.75v3.75h3.75zm-3.75-1.875h3.75c1.016 0 1.875.86 1.875 1.875v3.75c0 1.055-.86 1.875-1.875 1.875h-3.75A1.85 1.85 0 0 1 .25 22.375v-3.75c0-1.016.82-1.875 1.875-1.875m10-8.125v3.75h3.75v-3.75zm-1.875 0c0-1.016.82-1.875 1.875-1.875h3.75c1.016 0 1.875.86 1.875 1.875v3.75c0 1.055-.86 1.875-1.875 1.875h-3.75a1.85 1.85 0 0 1-1.875-1.875zm-7.187 1.563c0-.313.273-.626.624-.626h.626c.312 0 .625.313.625.626v.624a.64.64 0 0 1-.625.626h-.625a.617.617 0 0 1-.626-.626zm.624 9.375h.626c.312 0 .625.312.625.625v.625a.64.64 0 0 1-.625.625h-.625a.617.617 0 0 1-.626-.625v-.625c0-.313.274-.625.626-.625m9.376-9.375c0-.313.273-.626.624-.626h.626c.312 0 .624.313.624.626v.624a.64.64 0 0 1-.624.626h-.626a.617.617 0 0 1-.624-.626zm-2.813 7.187c0-.312.273-.625.625-.625h2.5c.313 0 .625.313.625.625 0 .352.273.625.625.625h1.25a.64.64 0 0 0 .625-.625c0-.312.273-.625.625-.625.313 0 .625.313.625.625v3.75a.64.64 0 0 1-.625.625h-2.5a.617.617 0 0 1-.625-.625c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625v2.5a.64.64 0 0 1-.625.625h-1.25a.617.617 0 0 1-.625-.625zM14.625 23c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625m2.5 0c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '79c7b4e509ee16780b12d54aff0eff49__a' },
            React.createElement("path", { d: 'M0 0h18v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedQrcodeLgBoldIcon);
exports.default = ForwardRef;
