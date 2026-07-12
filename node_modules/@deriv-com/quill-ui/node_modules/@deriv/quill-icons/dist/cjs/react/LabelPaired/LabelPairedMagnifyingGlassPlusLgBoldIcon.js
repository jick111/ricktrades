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
const LabelPairedMagnifyingGlassPlusLgBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 30, viewBox: '0 0 20 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M8.125 7.375c-2.266 0-4.297 1.21-5.43 3.125-1.132 1.953-1.132 4.336 0 6.25a6.22 6.22 0 0 0 5.43 3.125c2.227 0 4.258-1.172 5.39-3.125 1.133-1.914 1.133-4.297 0-6.25-1.132-1.914-3.163-3.125-5.39-3.125m0 14.375A8.12 8.12 0 0 1 0 13.625C0 9.172 3.633 5.5 8.125 5.5c4.453 0 8.125 3.672 8.125 8.125a8.25 8.25 0 0 1-1.758 5.078l5.195 5.235c.391.351.391.937 0 1.289a.856.856 0 0 1-1.289 0l-5.234-5.196a8.2 8.2 0 0 1-5.039 1.719m-.937-4.687v-2.5h-2.5c-.547 0-.938-.391-.938-.938 0-.508.39-.937.938-.937h2.5v-2.5c0-.508.39-.938.937-.938a.95.95 0 0 1 .938.938v2.5h2.5a.95.95 0 0 1 .937.937c0 .547-.43.938-.937.938h-2.5v2.5c0 .546-.43.937-.938.937-.547 0-.937-.39-.937-.937' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '439a6df7a29760228302036683dc380b__a' },
            React.createElement("path", { d: 'M0 0h20v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMagnifyingGlassPlusLgBoldIcon);
exports.default = ForwardRef;
