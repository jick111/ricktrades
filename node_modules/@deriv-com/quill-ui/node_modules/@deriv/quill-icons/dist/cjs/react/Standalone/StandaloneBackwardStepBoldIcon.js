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
exports.StandaloneBackwardStepBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneBackwardStepBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M12.875 9.938v4.14l6.875-4.844A1.06 1.06 0 0 1 20.414 9c.664 0 1.211.547 1.211 1.21v12.618c0 .664-.547 1.172-1.172 1.172-.273 0-.508-.04-.703-.195l-6.875-4.844v4.102c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937V9.937c0-.507.39-.937.938-.937a.95.95 0 0 1 .937.938m0 6.757L19.75 21.5v-9.96l-6.875 4.804z' })));
exports.StandaloneBackwardStepBoldIcon = StandaloneBackwardStepBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneBackwardStepBoldIcon);
exports.default = ForwardRef;
