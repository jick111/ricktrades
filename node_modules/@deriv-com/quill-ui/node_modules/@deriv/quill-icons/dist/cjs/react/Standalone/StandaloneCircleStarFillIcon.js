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
exports.StandaloneCircleStarFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneCircleStarFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M6 16.5a9.93 9.93 0 0 1 5-8.633c3.086-1.797 6.875-1.797 10 0 3.086 1.797 5 5.078 5 8.633 0 3.594-1.914 6.875-5 8.672-3.125 1.797-6.914 1.797-10 0-3.125-1.797-5-5.078-5-8.672m10-5.937c-.273 0-.469.156-.586.351l-1.406 2.89-3.164.47c-.235 0-.43.195-.508.39a.68.68 0 0 0 .156.664l2.305 2.227-.547 3.164c-.04.234.04.468.234.586.196.156.47.156.664.078L16 19.898l2.813 1.485c.195.078.468.078.664-.078.195-.117.273-.352.234-.586l-.508-3.164 2.266-2.227a.555.555 0 0 0 .156-.625.64.64 0 0 0-.508-.43l-3.164-.468-1.406-2.89a.62.62 0 0 0-.547-.313z' })));
exports.StandaloneCircleStarFillIcon = StandaloneCircleStarFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneCircleStarFillIcon);
exports.default = ForwardRef;
