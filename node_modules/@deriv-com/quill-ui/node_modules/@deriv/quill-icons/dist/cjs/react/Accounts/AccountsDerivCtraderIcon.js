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
exports.AccountsDerivCtraderIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const AccountsDerivCtraderIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#E22526', d: 'M0 6a6 6 0 0 1 6-6h20a6 6 0 0 1 6 6v20a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6z' }),
    React.createElement("path", { fill: '#B51E1E', d: 'M6 0a6 6 0 0 0-6 6v.174l29.914-4.721A5.98 5.98 0 0 0 26 0zM30.532 2.068 25.044 32H26a6 6 0 0 0 6-6V6c0-1.504-.553-2.88-1.468-3.932' }),
    React.createElement("path", { fill: '#fff', d: 'M9.007 17.071q0-.798.252-1.498a3.6 3.6 0 0 1 1.946-2.072q.7-.308 1.596-.308.588 0 1.078.112.49.098.952.294l-.434 1.666a5 5 0 0 0-.644-.196 3.4 3.4 0 0 0-.784-.084q-.924 0-1.386.574-.448.574-.448 1.512 0 .994.42 1.54.435.546 1.498.546.378 0 .812-.07a3.5 3.5 0 0 0 .798-.224l.294 1.708a5 5 0 0 1-.91.266 6 6 0 0 1-1.204.112q-1.008 0-1.736-.294a3.4 3.4 0 0 1-1.204-.826 3.3 3.3 0 0 1-.686-1.218q-.21-.715-.21-1.54M22.993 11.051v1.862h-2.926v7.84h-2.184v-7.84h-2.926v-1.862z' })));
exports.AccountsDerivCtraderIcon = AccountsDerivCtraderIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.AccountsDerivCtraderIcon);
exports.default = ForwardRef;
