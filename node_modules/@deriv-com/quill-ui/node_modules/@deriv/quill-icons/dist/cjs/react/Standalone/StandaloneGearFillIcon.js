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
exports.StandaloneGearFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneGearFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M25.336 13.023c.156.352.039.704-.234.977l-1.68 1.523c.039.313.039.665.039.977 0 .352 0 .703-.04 1.016l1.68 1.523c.274.234.391.625.235.977a8 8 0 0 1-.586 1.328l-.195.312c-.274.43-.547.86-.86 1.211-.234.313-.625.39-.976.274l-2.149-.664c-.547.39-1.133.703-1.718.976l-.508 2.227a.93.93 0 0 1-.703.703 11.7 11.7 0 0 1-3.32 0 .93.93 0 0 1-.704-.703l-.508-2.227a9.3 9.3 0 0 1-1.718-.976l-2.149.664c-.351.117-.742.039-.976-.235-.313-.39-.586-.82-.86-1.25l-.195-.312c-.234-.43-.43-.86-.586-1.328-.156-.352-.04-.703.234-.977l1.68-1.523C8.5 17.203 8.5 16.852 8.5 16.5c0-.312 0-.664.04-.977L6.86 14c-.274-.273-.391-.625-.235-.977.156-.468.352-.898.586-1.328l.195-.312c.274-.43.547-.86.86-1.25.234-.274.625-.352.976-.235l2.149.665c.547-.391 1.132-.743 1.718-.977l.508-2.227a.93.93 0 0 1 .703-.703c.547-.078 1.094-.156 1.68-.156.547 0 1.094.078 1.64.156.352.04.626.352.704.703l.508 2.227c.625.234 1.171.586 1.718.976l2.149-.664c.351-.117.742-.039.976.235.313.39.586.82.86 1.25l.195.312c.234.43.43.86.625 1.328zM16 19.625c1.094 0 2.11-.586 2.695-1.562.547-.938.547-2.149 0-3.125C18.11 14 17.094 13.375 16 13.375c-1.133 0-2.148.625-2.734 1.563-.547.976-.547 2.187 0 3.124A3.16 3.16 0 0 0 16 19.626' })));
exports.StandaloneGearFillIcon = StandaloneGearFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneGearFillIcon);
exports.default = ForwardRef;
