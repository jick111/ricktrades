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
exports.StandaloneImagePolaroidUserRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneImagePolaroidUserRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M20.375 21.5H8.5v1.25c0 .703.547 1.25 1.25 1.25h12.5c.664 0 1.25-.547 1.25-1.25V21.5zm-.078-1.25H23.5v-10c0-.664-.586-1.25-1.25-1.25H9.75c-.703 0-1.25.586-1.25 1.25v10h3.164c.313-1.406 1.563-2.5 3.086-2.5h2.5c1.484 0 2.773 1.094 3.047 2.5m-7.344 0h6.055c-.274-.703-.977-1.25-1.758-1.25h-2.5c-.82 0-1.523.547-1.797 1.25m11.797-10v12.5c0 1.406-1.133 2.5-2.5 2.5H9.75a2.47 2.47 0 0 1-2.5-2.5v-12.5c0-1.367 1.094-2.5 2.5-2.5h12.5c1.367 0 2.5 1.133 2.5 2.5M17.25 14c0-.664-.586-1.25-1.25-1.25-.703 0-1.25.586-1.25 1.25 0 .703.547 1.25 1.25 1.25.664 0 1.25-.547 1.25-1.25M16 11.5c.86 0 1.68.508 2.148 1.25.43.781.43 1.758 0 2.5-.468.781-1.289 1.25-2.148 1.25a2.54 2.54 0 0 1-2.187-1.25c-.43-.742-.43-1.719 0-2.5.468-.742 1.289-1.25 2.187-1.25' })));
exports.StandaloneImagePolaroidUserRegularIcon = StandaloneImagePolaroidUserRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneImagePolaroidUserRegularIcon);
exports.default = ForwardRef;
