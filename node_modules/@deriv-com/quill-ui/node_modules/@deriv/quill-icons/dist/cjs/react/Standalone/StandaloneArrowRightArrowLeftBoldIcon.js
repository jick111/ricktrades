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
exports.StandaloneArrowRightArrowLeftBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneArrowRightArrowLeftBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'm11.273 25.914-3.75-3.75c-.39-.352-.39-.937 0-1.328l3.75-3.711a.856.856 0 0 1 1.29 0c.39.352.39.938 0 1.29l-2.149 2.148h13.399a.95.95 0 0 1 .937.937c0 .547-.43.938-.937.938l-13.399.039 2.149 2.148c.39.352.39.938 0 1.29a.856.856 0 0 1-1.29 0m13.204-13.75-3.75 3.75c-.391.39-.977.39-1.329 0-.39-.351-.39-.937 0-1.328l2.149-2.149H8.187c-.546 0-.937-.39-.937-.937 0-.508.39-.937.938-.937h13.359l-2.149-2.149c-.39-.351-.39-.937 0-1.328.352-.352.938-.352 1.329 0l3.75 3.789a.92.92 0 0 1 0 1.29' })));
exports.StandaloneArrowRightArrowLeftBoldIcon = StandaloneArrowRightArrowLeftBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneArrowRightArrowLeftBoldIcon);
exports.default = ForwardRef;
