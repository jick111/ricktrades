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
exports.StandaloneStopwatchFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneStopwatchFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M14.125 6.5h3.75c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-.625v1.367c1.445.235 2.773.82 3.867 1.719l.86-.82a1.205 1.205 0 0 1 1.757 0c.508.468.508 1.289 0 1.757l-.937.938c.82 1.289 1.328 2.812 1.328 4.414 0 4.492-3.672 8.125-8.125 8.125a8.12 8.12 0 0 1-8.125-8.125 8.08 8.08 0 0 1 6.875-8.008V9h-.625c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25m2.813 7.5a.95.95 0 0 0-.938-.937.925.925 0 0 0-.937.937v5c0 .547.39.938.937.938.508 0 .938-.391.938-.938z' })));
exports.StandaloneStopwatchFillIcon = StandaloneStopwatchFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneStopwatchFillIcon);
exports.default = ForwardRef;
