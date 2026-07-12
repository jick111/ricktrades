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
exports.StandaloneArrowUpArrowDownBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneArrowUpArrowDownBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'm25.414 21.227-3.75 3.75c-.39.39-.977.39-1.328 0l-3.75-3.75a.856.856 0 0 1 0-1.29c.352-.39.937-.39 1.328 0l2.148 2.149V8.688c0-.508.391-.938.938-.938a.95.95 0 0 1 .938.938v13.398l2.148-2.148c.352-.391.937-.391 1.328 0a.92.92 0 0 1 0 1.289M11.664 8.023l3.711 3.75c.39.391.39.977 0 1.329-.352.39-.937.39-1.328 0l-2.149-2.149v13.36c0 .546-.39.937-.937.937a.925.925 0 0 1-.938-.937v-13.36l-2.148 2.149a.856.856 0 0 1-1.29 0c-.39-.352-.39-.938 0-1.329l3.75-3.75c.352-.351.938-.351 1.33 0' })));
exports.StandaloneArrowUpArrowDownBoldIcon = StandaloneArrowUpArrowDownBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneArrowUpArrowDownBoldIcon);
exports.default = ForwardRef;
