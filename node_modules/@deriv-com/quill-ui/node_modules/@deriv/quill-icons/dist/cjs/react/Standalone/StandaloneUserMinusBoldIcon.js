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
exports.StandaloneUserMinusBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneUserMinusBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M12.25 8.375c-1.133 0-2.148.625-2.734 1.563-.547.976-.547 2.187 0 3.124a3.16 3.16 0 0 0 2.734 1.563c1.094 0 2.11-.586 2.695-1.562.547-.938.547-2.149 0-3.126C14.36 9 13.344 8.376 12.25 8.376m0 8.125A4.97 4.97 0 0 1 7.914 14c-.898-1.523-.898-3.437 0-5 .899-1.523 2.54-2.5 4.336-2.5 1.758 0 3.398.977 4.297 2.5.898 1.563.898 3.477 0 5a4.96 4.96 0 0 1-4.297 2.5m-1.797 3.75c-2.578 0-4.687 1.914-5.039 4.375h13.633c-.352-2.46-2.461-4.375-5.04-4.375zm0-1.875h3.555A6.985 6.985 0 0 1 21 25.367c0 .625-.547 1.133-1.172 1.133H4.633A1.134 1.134 0 0 1 3.5 25.367c0-3.867 3.086-6.992 6.953-6.992m11.485-4.062h5.625a.95.95 0 0 1 .937.937c0 .547-.43.938-.937.938h-5.625c-.547 0-.938-.391-.938-.938 0-.508.39-.937.938-.937' })));
exports.StandaloneUserMinusBoldIcon = StandaloneUserMinusBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneUserMinusBoldIcon);
exports.default = ForwardRef;
