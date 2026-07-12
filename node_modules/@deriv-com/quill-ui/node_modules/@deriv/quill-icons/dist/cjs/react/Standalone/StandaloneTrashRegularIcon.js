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
exports.StandaloneTrashRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneTrashRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M14.164 7.75a.61.61 0 0 0-.508.313L13.031 9h5.899l-.625-.937a.61.61 0 0 0-.508-.313zM20.375 9h3.75c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-.742l-.977 13.945c-.117 1.328-1.172 2.305-2.5 2.305h-7.851a2.51 2.51 0 0 1-2.5-2.305L8.578 10.25h-.703a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h3.711l1.016-1.602a1.84 1.84 0 0 1 1.562-.898h3.633c.625 0 1.25.352 1.601.898zm1.758 1.25H9.828l.977 13.867c.039.625.586 1.133 1.25 1.133h7.851c.664 0 1.211-.508 1.25-1.133z' })));
exports.StandaloneTrashRegularIcon = StandaloneTrashRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneTrashRegularIcon);
exports.default = ForwardRef;
