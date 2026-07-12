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
exports.StandaloneChevronsLeftRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneChevronsLeftRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'm8.031 16.07 7.5-7.5a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .899L9.36 16.5l7.07 7.07a.66.66 0 0 1 0 .899.66.66 0 0 1-.899 0l-7.5-7.5a.66.66 0 0 1 0-.899m15-7.5a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .899L16.86 16.5l7.07 7.07a.66.66 0 0 1 0 .899.66.66 0 0 1-.899 0l-7.5-7.5a.66.66 0 0 1 0-.899z' })));
exports.StandaloneChevronsLeftRegularIcon = StandaloneChevronsLeftRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneChevronsLeftRegularIcon);
exports.default = ForwardRef;
