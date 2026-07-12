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
exports.StandaloneBadgeCheckFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneBadgeCheckFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M16 6.5c1.406 0 2.656.82 3.281 2.031a3.72 3.72 0 0 1 3.79.899 3.72 3.72 0 0 1 .898 3.789C25.179 13.844 26 15.094 26 16.5a3.73 3.73 0 0 1-2.031 3.32 3.65 3.65 0 0 1-.899 3.75c-1.015 1.016-2.5 1.328-3.789.938A3.68 3.68 0 0 1 16 26.5c-1.445 0-2.695-.781-3.32-1.992a3.75 3.75 0 0 1-3.75-.938 3.75 3.75 0 0 1-.938-3.75C6.782 19.195 6 17.945 6 16.5a3.68 3.68 0 0 1 1.992-3.281c-.39-1.29-.078-2.774.938-3.79a3.65 3.65 0 0 1 3.75-.898A3.73 3.73 0 0 1 16 6.5m4.414 8.164a.92.92 0 0 0 0-1.289c-.39-.39-.977-.39-1.328 0l-4.336 4.336-1.836-1.836c-.39-.39-.976-.39-1.328 0a.856.856 0 0 0 0 1.29l2.5 2.5c.351.39.937.39 1.328 0z' })));
exports.StandaloneBadgeCheckFillIcon = StandaloneBadgeCheckFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneBadgeCheckFillIcon);
exports.default = ForwardRef;
