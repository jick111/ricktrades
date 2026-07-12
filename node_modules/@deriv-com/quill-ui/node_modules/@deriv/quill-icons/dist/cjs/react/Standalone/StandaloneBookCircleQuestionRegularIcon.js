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
exports.StandaloneBookCircleQuestionRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneBookCircleQuestionRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M3.5 9c0-1.367 1.094-2.5 2.5-2.5h13.125C20.141 6.5 21 7.36 21 8.375v5.898c-.469.118-.86.274-1.25.508V8.375c0-.312-.312-.625-.625-.625H8.5V21.5H16c.04.43.117.86.234 1.25H6c-.703 0-1.25.586-1.25 1.25 0 .703.547 1.25 1.25 1.25h11.563c.39.508.82.898 1.328 1.25H6A2.47 2.47 0 0 1 3.5 24zm1.25 0v12.852c.352-.196.781-.352 1.25-.352h1.25V7.75H6c-.703 0-1.25.586-1.25 1.25m5.625 3.125c0-.312.273-.625.625-.625h6.25c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H11a.617.617 0 0 1-.625-.625m0 3.75c0-.312.273-.625.625-.625h6.25c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H11a.617.617 0 0 1-.625-.625m6.875 5c0-3.086 2.5-5.625 5.625-5.625 3.086 0 5.625 2.54 5.625 5.625a5.626 5.626 0 0 1-5.625 5.625 5.6 5.6 0 0 1-5.625-5.625m1.25 0a4.37 4.37 0 0 0 4.375 4.375c2.383 0 4.375-1.953 4.375-4.375 0-2.383-1.992-4.375-4.375-4.375-2.422 0-4.375 1.992-4.375 4.375m1.875-1.484c0-.899.703-1.641 1.602-1.641h1.601c.977 0 1.797.82 1.797 1.797 0 .664-.39 1.289-.977 1.601l-.937.47a.59.59 0 0 1-.586.507.617.617 0 0 1-.625-.625v-.234c0-.235.117-.47.313-.586l1.25-.625a.61.61 0 0 0 .312-.508c0-.274-.273-.547-.547-.547h-1.601c-.196 0-.352.195-.352.39v.235a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625zm1.875 3.984c0-.312.273-.625.625-.625.313 0 .625.313.625.625a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625' })));
exports.StandaloneBookCircleQuestionRegularIcon = StandaloneBookCircleQuestionRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneBookCircleQuestionRegularIcon);
exports.default = ForwardRef;
