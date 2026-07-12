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
exports.StandalonePaperclipBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandalonePaperclipBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M21.898 9.352a2.64 2.64 0 0 0-3.71 0l-7.461 7.5c-1.72 1.718-1.72 4.492 0 6.171 1.68 1.72 4.453 1.72 6.171 0l5.938-5.937a.92.92 0 0 1 1.289 0c.39.39.39.977 0 1.328l-5.898 5.938c-2.461 2.46-6.407 2.46-8.829 0-2.46-2.422-2.46-6.368 0-8.829l7.5-7.5c1.72-1.718 4.57-1.718 6.329 0 1.718 1.758 1.718 4.61 0 6.329l-7.188 7.187a2.932 2.932 0 0 1-4.375-.234c-.937-1.172-.82-2.852.234-3.907l5.938-5.937a.92.92 0 0 1 1.289 0c.39.39.39.976 0 1.328l-5.898 5.938c-.391.39-.43.976-.079 1.406.391.469 1.094.547 1.563.078l7.187-7.188a2.593 2.593 0 0 0 0-3.671' })));
exports.StandalonePaperclipBoldIcon = StandalonePaperclipBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandalonePaperclipBoldIcon);
exports.default = ForwardRef;
