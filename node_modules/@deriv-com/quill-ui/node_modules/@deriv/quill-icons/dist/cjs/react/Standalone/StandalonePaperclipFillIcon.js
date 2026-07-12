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
exports.StandalonePaperclipFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandalonePaperclipFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M21.469 9.781a2.5 2.5 0 0 0-3.477 0l-7.187 7.188c-1.64 1.64-1.64 4.336 0 5.976s4.336 1.64 5.976 0l5.938-5.937c.43-.43 1.093-.43 1.523 0s.43 1.094 0 1.523l-5.937 5.938a6.366 6.366 0 0 1-9.024 0 6.366 6.366 0 0 1 0-9.024l7.188-7.187a4.55 4.55 0 0 1 6.523 0 4.55 4.55 0 0 1 0 6.523l-6.875 6.875a2.806 2.806 0 0 1-4.023 0 2.806 2.806 0 0 1 0-4.023l5.625-5.625c.43-.43 1.093-.43 1.523 0s.43 1.094 0 1.523l-5.625 5.625a.766.766 0 0 0 0 .977.766.766 0 0 0 .977 0l6.875-6.875a2.5 2.5 0 0 0 0-3.477' })));
exports.StandalonePaperclipFillIcon = StandalonePaperclipFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandalonePaperclipFillIcon);
exports.default = ForwardRef;
