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
const LabelPairedBookmarkLgRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 30, viewBox: '0 0 15 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 7.375C0 6.359.82 5.5 1.875 5.5h11.25C14.141 5.5 15 6.36 15 7.375v17.266c0 .507-.39.859-.898.859a1.04 1.04 0 0 1-.47-.117L7.5 21.28l-6.172 4.102a1.04 1.04 0 0 1-.469.117c-.507 0-.859-.352-.859-.86zm1.875-.625a.64.64 0 0 0-.625.625v16.563l5.898-3.946a.67.67 0 0 1 .665 0l5.937 3.945V7.375c0-.312-.312-.625-.625-.625z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '99a52c043562041a440880bfcc46b422__a' },
            React.createElement("path", { d: 'M0 0h15v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedBookmarkLgRegularIcon);
exports.default = ForwardRef;
