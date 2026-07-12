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
exports.StandaloneArrowUpOneNineRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneArrowUpOneNineRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M22.25 8.375V14h1.25c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-3.75a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625H21V9.273l-1.055.352c-.351.078-.703-.078-.82-.43a.65.65 0 0 1 .43-.78l1.875-.626c.156-.039.39-.039.547.078a.67.67 0 0 1 .273.508m-10.82-.43 3.75 3.75a.66.66 0 0 1 0 .899.66.66 0 0 1-.899 0l-2.656-2.696v14.727a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V9.898L7.68 12.594a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l3.75-3.75a.66.66 0 0 1 .899 0m10.039 13.868c.703 0 1.367-.352 1.758-1.016.351-.625.351-1.367 0-2.031-.391-.625-1.055-1.016-1.758-1.016-.742 0-1.407.39-1.797 1.016-.352.664-.352 1.406 0 2.03.39.665 1.055 1.017 1.797 1.017m-3.282-2.032A3.276 3.276 0 0 1 21.47 16.5a3.3 3.3 0 0 1 3.281 3.281c0 .078 0 .117-.04.157h.04c0 .859-.312 1.64-.86 2.265l-2.421 2.852c-.235.273-.625.273-.899.078-.273-.235-.273-.625-.078-.899l1.016-1.172h-.04a3.25 3.25 0 0 1-3.28-3.28' })));
exports.StandaloneArrowUpOneNineRegularIcon = StandaloneArrowUpOneNineRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneArrowUpOneNineRegularIcon);
exports.default = ForwardRef;
