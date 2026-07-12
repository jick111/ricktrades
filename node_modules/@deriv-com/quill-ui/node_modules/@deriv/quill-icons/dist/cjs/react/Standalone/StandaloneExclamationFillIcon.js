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
exports.StandaloneExclamationFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneExclamationFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M17.25 9v10c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25V9c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25M16 25.25c-.586 0-1.094-.273-1.367-.781-.274-.469-.274-1.055 0-1.563A1.58 1.58 0 0 1 16 22.125a1.56 1.56 0 0 1 1.328.781c.274.508.274 1.094 0 1.563A1.48 1.48 0 0 1 16 25.25' })));
exports.StandaloneExclamationFillIcon = StandaloneExclamationFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneExclamationFillIcon);
exports.default = ForwardRef;
