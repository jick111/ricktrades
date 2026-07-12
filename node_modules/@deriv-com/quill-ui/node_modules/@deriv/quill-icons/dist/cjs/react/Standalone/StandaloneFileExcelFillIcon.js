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
exports.StandaloneFileExcelFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneFileExcelFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M11.5 6.5h6.25v5c0 .703.547 1.25 1.25 1.25h5V24c0 1.406-1.133 2.5-2.5 2.5h-10A2.47 2.47 0 0 1 9 24V9c0-1.367 1.094-2.5 2.5-2.5m7.5 0 5 5h-5zm-3.945 9.805a.897.897 0 0 0-1.29-.235.897.897 0 0 0-.234 1.29l1.797 2.578-1.797 2.617c-.312.39-.195.976.235 1.289a.897.897 0 0 0 1.289-.235l1.445-2.03 1.406 2.03c.313.43.86.547 1.29.235.429-.313.546-.86.234-1.29l-1.797-2.616 1.797-2.579a.897.897 0 0 0-.235-1.289.897.897 0 0 0-1.289.235l-1.406 2.03z' })));
exports.StandaloneFileExcelFillIcon = StandaloneFileExcelFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneFileExcelFillIcon);
exports.default = ForwardRef;
