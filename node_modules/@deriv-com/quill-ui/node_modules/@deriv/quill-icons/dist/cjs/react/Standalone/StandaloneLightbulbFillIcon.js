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
exports.StandaloneLightbulbFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneLightbulbFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M19.625 21.5h-6.25c-.39-1.21-1.172-2.305-1.953-3.36l-.586-.82c-.781-1.133-1.211-2.46-1.211-3.945A6.86 6.86 0 0 1 16.5 6.5c3.79 0 6.875 3.086 6.875 6.914 0 1.445-.469 2.774-1.25 3.906l-.586.82c-.781 1.055-1.562 2.15-1.914 3.36m-3.125 5c-1.758 0-3.125-1.367-3.125-3.125v-.625h6.25v.625A3.11 3.11 0 0 1 16.5 26.5m-3.125-13.125A3.11 3.11 0 0 1 16.5 10.25a.64.64 0 0 0 .625-.625c0-.312-.312-.625-.625-.625-2.422 0-4.375 1.992-4.375 4.375 0 .352.273.625.625.625a.64.64 0 0 0 .625-.625' })));
exports.StandaloneLightbulbFillIcon = StandaloneLightbulbFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneLightbulbFillIcon);
exports.default = ForwardRef;
