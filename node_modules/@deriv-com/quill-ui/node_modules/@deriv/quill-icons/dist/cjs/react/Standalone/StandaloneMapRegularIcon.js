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
exports.StandaloneMapRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneMapRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M11.39 7.828a.46.46 0 0 1 .391-.039l8.555 2.461 5.625-2.266c.586-.234 1.289.196 1.289.86V21.93c0 .39-.234.742-.625.86l-6.055 2.42c-.117.08-.234.08-.39.04l-8.555-2.46L6 25.054a.916.916 0 0 1-1.25-.86V11.11c0-.39.234-.742.586-.859zM6 11.305v12.422l5-1.993V9.312zm13.75 12.5V11.383l-7.5-2.149v12.422zm1.25-.078 5-1.993V9.312l-5 1.993z' })));
exports.StandaloneMapRegularIcon = StandaloneMapRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneMapRegularIcon);
exports.default = ForwardRef;
