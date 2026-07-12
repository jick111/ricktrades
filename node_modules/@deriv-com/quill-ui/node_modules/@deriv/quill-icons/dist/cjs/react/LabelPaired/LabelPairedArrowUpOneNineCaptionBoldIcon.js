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
const React = __importStar(require("react"));
const react_1 = require("react");
const LabelPairedArrowUpOneNineCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 18, viewBox: '0 0 14 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M10.938 4.813v2.812h.562a.57.57 0 0 1 .563.563.555.555 0 0 1-.563.562H9.25a.54.54 0 0 1-.562-.562c0-.305.234-.563.562-.563h.563V5.609l-.399.118a.55.55 0 0 1-.703-.352c-.094-.305.047-.61.351-.703l1.126-.375a.52.52 0 0 1 .515.07c.14.094.235.281.235.446m-7.336-.399c.21-.21.562-.21.773 0l2.25 2.25c.234.234.234.586 0 .797a.513.513 0 0 1-.773 0l-1.29-1.29v8.017A.555.555 0 0 1 4 14.75a.54.54 0 0 1-.562-.562V6.172L2.148 7.46c-.234.234-.586.234-.796 0a.513.513 0 0 1 0-.774l2.25-2.25zm6.586 6.211a.95.95 0 0 0-.82.469.95.95 0 0 0 0 .937c.163.305.468.469.82.469a.89.89 0 0 0 .796-.469.95.95 0 0 0 0-.937.94.94 0 0 0-.796-.469m-.422 2.977a2.09 2.09 0 0 1-1.641-2.04c0-1.124.914-2.062 2.063-2.062a2.08 2.08 0 0 1 2.062 2.063c0 .515-.187.984-.492 1.359l-1.336 1.64c-.188.235-.54.258-.797.07-.234-.187-.258-.538-.07-.796z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '5672800abbfbf1ab2d26ec54cb4e11e9__a' },
            React.createElement("path", { d: 'M0 0h14v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowUpOneNineCaptionBoldIcon);
exports.default = ForwardRef;
