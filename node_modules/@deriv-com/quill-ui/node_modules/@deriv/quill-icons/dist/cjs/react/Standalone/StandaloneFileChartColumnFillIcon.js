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
exports.StandaloneFileChartColumnFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneFileChartColumnFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M11 6.5h6.25v5c0 .703.547 1.25 1.25 1.25h5V24c0 1.406-1.133 2.5-2.5 2.5H11A2.47 2.47 0 0 1 8.5 24V9c0-1.367 1.094-2.5 2.5-2.5m7.5 0 5 5h-5zm-1.562 9.688A.95.95 0 0 0 16 15.25a.925.925 0 0 0-.937.938v6.875c0 .546.39.937.937.937.508 0 .938-.39.938-.937zm3.437 2.5a.95.95 0 0 0-.937-.938.925.925 0 0 0-.938.938v4.375c0 .546.39.937.938.937.507 0 .937-.39.937-.937zm-6.875 2.5a.95.95 0 0 0-.937-.938.925.925 0 0 0-.938.938v1.875c0 .546.39.937.938.937.507 0 .937-.39.937-.937z' })));
exports.StandaloneFileChartColumnFillIcon = StandaloneFileChartColumnFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneFileChartColumnFillIcon);
exports.default = ForwardRef;
