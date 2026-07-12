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
exports.StandaloneForwardRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneForwardRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M24.516 16.5 16 10.328v12.383zM15.922 9c.234 0 .469.078.664.234l9.023 6.524c.235.195.391.469.391.742 0 .313-.156.586-.39.781l-9.024 6.524c-.195.117-.43.195-.664.195a1.15 1.15 0 0 1-1.172-1.172v-4.023l-6.914 5c-.195.117-.43.195-.664.195A1.15 1.15 0 0 1 6 22.828V10.172C6 9.547 6.508 9 7.172 9c.234 0 .469.078.664.234l6.914 5v-4.062c0-.625.508-1.172 1.172-1.172m-1.172 8.281v-1.523l-7.5-5.43v12.383z' })));
exports.StandaloneForwardRegularIcon = StandaloneForwardRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneForwardRegularIcon);
exports.default = ForwardRef;
