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
exports.StandaloneEnvelopeFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneEnvelopeFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M7.875 9h16.25C25.141 9 26 9.86 26 10.875c0 .625-.312 1.172-.781 1.523l-8.477 6.368a1.23 1.23 0 0 1-1.523 0l-8.477-6.368A1.87 1.87 0 0 1 6 10.875C6 9.859 6.82 9 7.875 9M6 13.375l8.477 6.406a2.52 2.52 0 0 0 3.007 0L26 13.375V21.5c0 1.406-1.133 2.5-2.5 2.5h-15A2.47 2.47 0 0 1 6 21.5z' })));
exports.StandaloneEnvelopeFillIcon = StandaloneEnvelopeFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneEnvelopeFillIcon);
exports.default = ForwardRef;
