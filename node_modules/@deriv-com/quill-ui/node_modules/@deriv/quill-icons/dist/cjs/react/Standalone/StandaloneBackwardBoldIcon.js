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
exports.StandaloneBackwardBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneBackwardBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M17.25 10.172v3.906l6.875-4.844A1.06 1.06 0 0 1 24.789 9C25.453 9 26 9.547 26 10.21v12.618c0 .664-.547 1.172-1.172 1.172-.273 0-.508-.04-.703-.195l-6.914-4.844v3.867A1.15 1.15 0 0 1 16.039 24c-.234 0-.469-.078-.664-.195L6.352 17.28A.98.98 0 0 1 6 16.5c0-.273.117-.547.352-.742l9.023-6.524A1.1 1.1 0 0 1 16.078 9c.625 0 1.172.547 1.172 1.172m0 6.172v.351l6.875 4.805v-9.96zM8.5 16.5l6.875 4.96v-9.882z' })));
exports.StandaloneBackwardBoldIcon = StandaloneBackwardBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneBackwardBoldIcon);
exports.default = ForwardRef;
