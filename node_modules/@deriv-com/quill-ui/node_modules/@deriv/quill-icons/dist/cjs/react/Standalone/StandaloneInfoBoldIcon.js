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
exports.StandaloneInfoBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneInfoBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M14.438 9.313c0-.547.273-1.055.78-1.329.47-.273 1.055-.273 1.563 0 .469.274.782.782.782 1.329 0 .585-.313 1.093-.782 1.367-.508.273-1.093.273-1.562 0-.508-.274-.781-.782-.781-1.367m-1.563 5c0-.508.39-.938.938-.938H16a.95.95 0 0 1 .938.938v10.312h1.875a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937h-5.625c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h1.874V15.25h-1.25c-.546 0-.937-.39-.937-.937' })));
exports.StandaloneInfoBoldIcon = StandaloneInfoBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneInfoBoldIcon);
exports.default = ForwardRef;
