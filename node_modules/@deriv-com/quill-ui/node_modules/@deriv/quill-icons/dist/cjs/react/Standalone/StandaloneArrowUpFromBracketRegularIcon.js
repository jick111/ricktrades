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
exports.StandaloneArrowUpFromBracketRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneArrowUpFromBracketRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'm16.43 6.695 5 5a.66.66 0 0 1 0 .899.66.66 0 0 1-.899 0l-3.906-3.946v10.977a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V8.648l-3.945 3.946a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l5-5a.66.66 0 0 1 .899 0M8.5 19.625v3.75c0 1.055.82 1.875 1.875 1.875h11.25c1.016 0 1.875-.82 1.875-1.875v-3.75c0-.312.273-.625.625-.625.313 0 .625.313.625.625v3.75a3.11 3.11 0 0 1-3.125 3.125h-11.25c-1.758 0-3.125-1.367-3.125-3.125v-3.75c0-.312.273-.625.625-.625.313 0 .625.313.625.625' })));
exports.StandaloneArrowUpFromBracketRegularIcon = StandaloneArrowUpFromBracketRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneArrowUpFromBracketRegularIcon);
exports.default = ForwardRef;
