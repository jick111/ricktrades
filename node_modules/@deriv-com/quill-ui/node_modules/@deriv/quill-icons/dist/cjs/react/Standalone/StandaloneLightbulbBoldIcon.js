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
exports.StandaloneLightbulbBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneLightbulbBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M20.602 16.227a4.95 4.95 0 0 0 .898-2.852c0-2.734-2.266-5-5-5-2.773 0-5 2.266-5 5 0 1.094.313 2.07.86 2.852.156.234.312.468.507.703.508.703 1.094 1.523 1.563 2.343.39.743.625 1.524.703 2.227h-1.875c-.117-.469-.235-.898-.469-1.328-.39-.703-.86-1.367-1.367-2.031l-.586-.82c-.781-1.134-1.211-2.462-1.211-3.946A6.86 6.86 0 0 1 16.5 6.5c3.79 0 6.875 3.086 6.875 6.875 0 1.484-.469 2.813-1.25 3.945l-.586.82c-.508.665-.977 1.329-1.367 2.032-.235.43-.352.86-.469 1.328h-1.875c.117-.703.313-1.484.703-2.227.469-.82 1.055-1.64 1.563-2.343.195-.235.351-.47.508-.703M16.5 11.5c-1.055 0-1.875.86-1.875 1.875A.64.64 0 0 1 14 14a.617.617 0 0 1-.625-.625A3.11 3.11 0 0 1 16.5 10.25c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625m0 15c-1.758 0-3.125-1.367-3.125-3.125v-.625h6.25v.625A3.11 3.11 0 0 1 16.5 26.5' })));
exports.StandaloneLightbulbBoldIcon = StandaloneLightbulbBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneLightbulbBoldIcon);
exports.default = ForwardRef;
