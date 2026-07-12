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
const LabelPairedObjectsColumnLgRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 30, viewBox: '0 0 18 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.125 8a.64.64 0 0 0-.625.625v6.25c0 .352.273.625.625.625h3.75a.64.64 0 0 0 .625-.625v-6.25C6.5 8.313 6.188 8 5.875 8zM.25 8.625c0-1.016.82-1.875 1.875-1.875h3.75c1.016 0 1.875.86 1.875 1.875v6.25c0 1.055-.86 1.875-1.875 1.875h-3.75A1.85 1.85 0 0 1 .25 14.875zM12.125 15.5a.64.64 0 0 0-.625.625v6.25c0 .352.273.625.625.625h3.75a.64.64 0 0 0 .625-.625v-6.25c0-.312-.312-.625-.625-.625zm-1.875.625c0-1.016.82-1.875 1.875-1.875h3.75c1.016 0 1.875.86 1.875 1.875v6.25c0 1.055-.86 1.875-1.875 1.875h-3.75a1.85 1.85 0 0 1-1.875-1.875zM5.875 19.25h-3.75a.64.64 0 0 0-.625.625v2.5c0 .352.273.625.625.625h3.75a.64.64 0 0 0 .625-.625v-2.5c0-.312-.312-.625-.625-.625M2.125 18h3.75c1.016 0 1.875.86 1.875 1.875v2.5c0 1.055-.86 1.875-1.875 1.875h-3.75A1.85 1.85 0 0 1 .25 22.375v-2.5C.25 18.859 1.07 18 2.125 18m10-10a.64.64 0 0 0-.625.625v2.5c0 .352.273.625.625.625h3.75a.64.64 0 0 0 .625-.625v-2.5c0-.312-.312-.625-.625-.625zm-1.875.625c0-1.016.82-1.875 1.875-1.875h3.75c1.016 0 1.875.86 1.875 1.875v2.5c0 1.055-.86 1.875-1.875 1.875h-3.75a1.85 1.85 0 0 1-1.875-1.875z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '73726f6a5c134255d46aba0806e62cad__a' },
            React.createElement("path", { d: 'M0 0h18v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedObjectsColumnLgRegularIcon);
exports.default = ForwardRef;
