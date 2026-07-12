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
const LabelPairedWalletLgRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 30, viewBox: '0 0 20 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3.125 6.75h15c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-15C2.07 8 1.25 8.86 1.25 9.875v11.25C1.25 22.18 2.07 23 3.125 23h13.75c1.016 0 1.875-.82 1.875-1.875v-8.75c0-1.016-.86-1.875-1.875-1.875h-12.5a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h12.5A3.134 3.134 0 0 1 20 12.375v8.75a3.11 3.11 0 0 1-3.125 3.125H3.125C1.367 24.25 0 22.883 0 21.125V9.875A3.11 3.11 0 0 1 3.125 6.75M15 17.688c-.547 0-.937-.391-.937-.938 0-.508.39-.937.937-.937a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '62c5b27ffd0f23992f7a1976398fcd14__a' },
            React.createElement("path", { d: 'M0 0h20v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedWalletLgRegularIcon);
exports.default = ForwardRef;
