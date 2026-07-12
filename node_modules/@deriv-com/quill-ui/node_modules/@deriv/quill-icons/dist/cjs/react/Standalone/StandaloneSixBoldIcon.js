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
exports.StandaloneSixBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneSixBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M20.375 19c0-2.383-1.992-4.375-4.375-4.375a4.3 4.3 0 0 0-3.203 1.406l-.195.235c-.665.78-.977 1.757-.977 2.734A4.37 4.37 0 0 0 16 23.375c2.383 0 4.375-1.953 4.375-4.375m-4.96-6.21c.194 0 .39-.04.585-.04 3.438 0 6.25 2.813 6.25 6.25A6.243 6.243 0 0 1 16 25.25 6.22 6.22 0 0 1 9.75 19c0-1.602.586-3.086 1.602-4.18l5.468-6.718a.93.93 0 0 1 1.328-.118c.391.313.47.899.118 1.329z' })));
exports.StandaloneSixBoldIcon = StandaloneSixBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneSixBoldIcon);
exports.default = ForwardRef;
