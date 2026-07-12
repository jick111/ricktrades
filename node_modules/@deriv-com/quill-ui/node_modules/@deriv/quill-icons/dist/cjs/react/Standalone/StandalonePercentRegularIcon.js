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
exports.StandalonePercentRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandalonePercentRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M11 10.25c-.703 0-1.25.586-1.25 1.25 0 .703.547 1.25 1.25 1.25.664 0 1.25-.547 1.25-1.25 0-.664-.586-1.25-1.25-1.25M11 14a2.54 2.54 0 0 1-2.187-1.25c-.43-.742-.43-1.719 0-2.5C9.28 9.508 10.102 9 11 9c.86 0 1.68.508 2.148 1.25.43.781.43 1.758 0 2.5C12.68 13.531 11.86 14 11 14m10 6.25c-.703 0-1.25.586-1.25 1.25 0 .703.547 1.25 1.25 1.25.664 0 1.25-.547 1.25-1.25 0-.664-.586-1.25-1.25-1.25M21 24a2.54 2.54 0 0 1-2.187-1.25c-.43-.742-.43-1.719 0-2.5C19.28 19.508 20.102 19 21 19c.86 0 1.68.508 2.148 1.25.43.781.43 1.758 0 2.5C22.68 23.531 21.86 24 21 24m2.305-13.906-13.75 13.75a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l13.75-13.75a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .899' })));
exports.StandalonePercentRegularIcon = StandalonePercentRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandalonePercentRegularIcon);
exports.default = ForwardRef;
