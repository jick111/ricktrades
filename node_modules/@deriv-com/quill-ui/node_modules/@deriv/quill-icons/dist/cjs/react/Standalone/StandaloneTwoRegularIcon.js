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
exports.StandaloneTwoRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneTwoRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M15.531 9c-1.133 0-2.226.469-3.047 1.25l-1.054 1.094a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l1.094-1.054a5.4 5.4 0 0 1 3.906-1.641C18.5 7.75 21 10.172 21 13.18c0 1.523-.625 2.93-1.719 3.984L11.938 24h9.687c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-11.25c-.273 0-.508-.156-.586-.39a.54.54 0 0 1 .156-.665l8.477-7.968a4.22 4.22 0 0 0 1.328-3.047c0-2.305-1.914-4.18-4.219-4.18' })));
exports.StandaloneTwoRegularIcon = StandaloneTwoRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneTwoRegularIcon);
exports.default = ForwardRef;
