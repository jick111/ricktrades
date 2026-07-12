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
exports.StandaloneQrcodeFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneQrcodeFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M7.25 9.625c0-1.016.82-1.875 1.875-1.875h3.75c1.016 0 1.875.86 1.875 1.875v3.75c0 1.055-.86 1.875-1.875 1.875h-3.75a1.85 1.85 0 0 1-1.875-1.875zm2.5.625v2.5h2.5v-2.5zm-2.5 9.375c0-1.016.82-1.875 1.875-1.875h3.75c1.016 0 1.875.86 1.875 1.875v3.75c0 1.055-.86 1.875-1.875 1.875h-3.75a1.85 1.85 0 0 1-1.875-1.875zm2.5.625v2.5h2.5v-2.5zm9.375-12.5h3.75c1.016 0 1.875.86 1.875 1.875v3.75c0 1.055-.86 1.875-1.875 1.875h-3.75a1.85 1.85 0 0 1-1.875-1.875v-3.75c0-1.016.82-1.875 1.875-1.875m3.125 2.5h-2.5v2.5h2.5zm-5 8.125c0-.312.273-.625.625-.625h2.5c.313 0 .625.313.625.625 0 .352.273.625.625.625h1.25a.64.64 0 0 0 .625-.625c0-.312.273-.625.625-.625.313 0 .625.313.625.625v3.75a.64.64 0 0 1-.625.625h-2.5a.617.617 0 0 1-.625-.625c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625v2.5a.64.64 0 0 1-.625.625h-1.25a.617.617 0 0 1-.625-.625zm4.375 6.875a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625.313 0 .625.313.625.625a.64.64 0 0 1-.625.625m2.5 0a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625.313 0 .625.313.625.625a.64.64 0 0 1-.625.625' })));
exports.StandaloneQrcodeFillIcon = StandaloneQrcodeFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneQrcodeFillIcon);
exports.default = ForwardRef;
