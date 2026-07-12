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
exports.StandaloneRightFromBracketRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneRightFromBracketRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'm24.71 16.46-5.155-4.882a.3.3 0 0 0-.196-.078c-.117 0-.234.117-.234.273V14a.64.64 0 0 1-.625.625h-4.687a.31.31 0 0 0-.313.313v3.124c0 .196.117.313.313.313H18.5c.313 0 .625.313.625.625v2.266c0 .117.117.234.234.234.078 0 .157 0 .196-.04l5.156-4.882s.039-.039.039-.078zm1.29.04c0 .39-.156.742-.43 1.016l-5.156 4.843c-.273.274-.664.391-1.055.391-.82 0-1.484-.664-1.484-1.484v-1.641h-4.062c-.899 0-1.563-.664-1.563-1.562v-3.125c0-.86.664-1.563 1.563-1.563h4.062v-1.602c0-.82.664-1.523 1.484-1.523.391 0 .782.156 1.055.43l5.156 4.843c.274.274.43.625.43.977M12.875 9h-3.75C8.07 9 7.25 9.86 7.25 10.875v11.25C7.25 23.18 8.07 24 9.125 24h3.75c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-3.75C7.367 25.25 6 23.883 6 22.125v-11.25A3.11 3.11 0 0 1 9.125 7.75h3.75c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625' })));
exports.StandaloneRightFromBracketRegularIcon = StandaloneRightFromBracketRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneRightFromBracketRegularIcon);
exports.default = ForwardRef;
