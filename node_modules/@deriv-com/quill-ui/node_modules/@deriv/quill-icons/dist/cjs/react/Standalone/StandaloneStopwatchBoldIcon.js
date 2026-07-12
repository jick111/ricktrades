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
exports.StandaloneStopwatchBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneStopwatchBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M12.875 7.438c0-.508.39-.938.938-.938h4.374a.95.95 0 0 1 .938.938c0 .546-.43.937-.937.937h-1.25v1.953a7.9 7.9 0 0 1 4.414 1.992l1.171-1.172a.92.92 0 0 1 1.29 0c.39.391.39.977 0 1.329l-1.211 1.21c.937 1.329 1.523 2.97 1.523 4.688 0 4.492-3.672 8.125-8.125 8.125a8.12 8.12 0 0 1-8.125-8.125c0-4.14 3.125-7.578 7.188-8.047V8.375h-1.25c-.547 0-.938-.39-.938-.937M16 24.625c2.227 0 4.258-1.172 5.39-3.125 1.133-1.914 1.133-4.297 0-6.25-1.132-1.914-3.163-3.125-5.39-3.125-2.266 0-4.297 1.21-5.43 3.125-1.133 1.953-1.133 4.336 0 6.25A6.22 6.22 0 0 0 16 24.625m.938-9.687V19c0 .547-.43.938-.938.938-.547 0-.937-.391-.937-.938v-4.062c0-.508.39-.938.937-.938a.95.95 0 0 1 .938.938' })));
exports.StandaloneStopwatchBoldIcon = StandaloneStopwatchBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneStopwatchBoldIcon);
exports.default = ForwardRef;
