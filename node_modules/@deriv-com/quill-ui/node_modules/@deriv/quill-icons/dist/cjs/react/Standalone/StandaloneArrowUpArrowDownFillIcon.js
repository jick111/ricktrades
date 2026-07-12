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
exports.StandaloneArrowUpArrowDownFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneArrowUpArrowDownFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'm11.86 8.14 3.75 3.75c.507.47.507 1.29 0 1.758a1.205 1.205 0 0 1-1.758 0l-1.602-1.601V24c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25V12.047l-1.64 1.601a1.205 1.205 0 0 1-1.758 0 1.205 1.205 0 0 1 0-1.757l3.75-3.75a1.205 1.205 0 0 1 1.757 0m13.75 13.008-3.75 3.75a1.205 1.205 0 0 1-1.758 0l-3.75-3.75a1.205 1.205 0 0 1 0-1.757 1.205 1.205 0 0 1 1.757 0l1.641 1.601V9c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25v11.992l1.602-1.601a1.205 1.205 0 0 1 1.757 0c.508.468.508 1.289 0 1.757' })));
exports.StandaloneArrowUpArrowDownFillIcon = StandaloneArrowUpArrowDownFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneArrowUpArrowDownFillIcon);
exports.default = ForwardRef;
