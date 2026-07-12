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
const LabelPairedEightSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 9, height: 22, viewBox: '0 0 9 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M8.438 8.016a3.4 3.4 0 0 1-1.204 2.597 3.34 3.34 0 0 1 1.641 2.871 3.39 3.39 0 0 1-3.39 3.391h-1.97a3.373 3.373 0 0 1-3.39-3.39c0-1.204.629-2.297 1.613-2.872C1 9.984.563 9.055.563 8.016a3.39 3.39 0 0 1 3.39-3.391h1.094c1.86 0 3.39 1.531 3.39 3.39m-3.391 3.39H3.516a2.077 2.077 0 1 0 0 4.156h1.968a2.077 2.077 0 1 0 0-4.156zm0-1.312a2.077 2.077 0 1 0 0-4.156H3.953a2.077 2.077 0 1 0 0 4.156z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '726cb465a9ec3941359bcdf2d09ae735__a' },
            React.createElement("path", { d: 'M0 0h9v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedEightSmBoldIcon);
exports.default = ForwardRef;
