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
exports.StandaloneCameraFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneCameraFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M11.82 9.04a1.85 1.85 0 0 1 1.758-1.29h4.805c.82 0 1.523.547 1.758 1.29l.43 1.21H23.5c1.367 0 2.5 1.133 2.5 2.5v10c0 1.406-1.133 2.5-2.5 2.5h-15a2.47 2.47 0 0 1-2.5-2.5v-10c0-1.367 1.094-2.5 2.5-2.5h2.89zM16 14c-1.367 0-2.578.742-3.281 1.875-.664 1.172-.664 2.617 0 3.75.703 1.172 1.914 1.875 3.281 1.875 1.328 0 2.54-.703 3.242-1.875.664-1.133.664-2.578 0-3.75C18.54 14.742 17.328 14 16 14' })));
exports.StandaloneCameraFillIcon = StandaloneCameraFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneCameraFillIcon);
exports.default = ForwardRef;
