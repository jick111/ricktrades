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
exports.StandaloneCircleEightRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneCircleEightRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M24.75 16.5c0-3.125-1.68-5.977-4.375-7.54-2.734-1.6-6.055-1.6-8.75 0A8.63 8.63 0 0 0 7.25 16.5c0 3.164 1.64 6.016 4.375 7.578 2.695 1.602 6.016 1.602 8.75 0A8.73 8.73 0 0 0 24.75 16.5M6 16.5a9.93 9.93 0 0 1 5-8.633c3.086-1.797 6.875-1.797 10 0 3.086 1.797 5 5.078 5 8.633 0 3.594-1.914 6.875-5 8.672-3.125 1.797-6.914 1.797-10 0-3.125-1.797-5-5.078-5-8.672m10.469-5c1.445 0 2.656 1.21 2.656 2.656 0 .82-.352 1.524-.898 1.992.703.547 1.21 1.407 1.21 2.383A2.967 2.967 0 0 1 16.47 21.5h-.938a2.967 2.967 0 0 1-2.969-2.969c0-.976.47-1.836 1.172-2.383-.546-.468-.859-1.171-.859-1.992a2.66 2.66 0 0 1 2.656-2.656zm-.938 4.063h.938c.742 0 1.406-.626 1.406-1.407 0-.742-.664-1.406-1.406-1.406h-.938c-.781 0-1.406.664-1.406 1.406a1.4 1.4 0 0 0 1.406 1.406m.938 1.25h-.938c-.976 0-1.719.78-1.719 1.718 0 .977.743 1.719 1.72 1.719h.937c.937 0 1.718-.742 1.718-1.719 0-.937-.78-1.718-1.718-1.718' })));
exports.StandaloneCircleEightRegularIcon = StandaloneCircleEightRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneCircleEightRegularIcon);
exports.default = ForwardRef;
