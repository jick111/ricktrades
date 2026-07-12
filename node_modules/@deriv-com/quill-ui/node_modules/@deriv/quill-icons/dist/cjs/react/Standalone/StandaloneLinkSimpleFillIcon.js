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
exports.StandaloneLinkSimpleFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneLinkSimpleFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M4.75 16.5A6.243 6.243 0 0 1 11 10.25h2.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25H11a3.751 3.751 0 0 0 0 7.5h2.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25H11a6.22 6.22 0 0 1-6.25-6.25m22.5 0A6.243 6.243 0 0 1 21 22.75h-2.5c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25H21a3.751 3.751 0 0 0 0-7.5h-2.5c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25H21c3.438 0 6.25 2.813 6.25 6.25m-15-1.25h7.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-7.5c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25' })));
exports.StandaloneLinkSimpleFillIcon = StandaloneLinkSimpleFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneLinkSimpleFillIcon);
exports.default = ForwardRef;
