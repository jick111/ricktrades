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
const LabelPairedThreeLgBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 30, viewBox: '0 0 13 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.25 7.688c0-.508.39-.938.938-.938h10c.351 0 .703.234.859.625.156.352.039.742-.235 1.016l-5.82 5.547h1.602c2.812 0 5.156 2.343 5.156 5.156 0 2.851-2.344 5.156-5.156 5.156H4.039c-1.523 0-2.93-.86-3.633-2.227l-.078-.156a.925.925 0 0 1 .43-1.25.925.925 0 0 1 1.25.43l.078.117c.352.742 1.133 1.211 1.953 1.211h3.555a3.276 3.276 0 0 0 3.281-3.281 3.3 3.3 0 0 0-3.281-3.282H3.687a.99.99 0 0 1-.898-.585.98.98 0 0 1 .234-1.016l5.82-5.586H1.189c-.547 0-.938-.39-.938-.937' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'a0b4e7c270ccd8db8160d79bcfaa07dc__a' },
            React.createElement("path", { d: 'M0 0h13v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedThreeLgBoldIcon);
exports.default = ForwardRef;
