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
exports.StandaloneStarFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneStarFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'm17.094 7.203 2.539 5.195 5.586.82c.468.079.86.391 1.015.86.157.43.04.938-.312 1.25l-4.063 4.024.977 5.703c.078.468-.117.937-.508 1.21-.39.313-.898.313-1.328.118l-5-2.695-5.04 2.695c-.39.195-.898.195-1.288-.117a1.23 1.23 0 0 1-.508-1.211l.938-5.703-4.063-4.024c-.312-.312-.43-.82-.312-1.25a1.27 1.27 0 0 1 1.015-.86l5.625-.82 2.5-5.195c.195-.43.625-.703 1.133-.703.469 0 .898.273 1.094.703' })));
exports.StandaloneStarFillIcon = StandaloneStarFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneStarFillIcon);
exports.default = ForwardRef;
