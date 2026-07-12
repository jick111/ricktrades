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
exports.StandaloneArrowDownToLineRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneArrowDownToLineRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M9.125 25.25a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h13.75c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625zm7.305-3.906a.66.66 0 0 1-.899 0l-5-5a.66.66 0 0 1 0-.899.66.66 0 0 1 .899 0l3.945 3.946V8.375c0-.312.273-.625.625-.625.313 0 .625.313.625.625V19.39l3.906-3.945a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .899z' })));
exports.StandaloneArrowDownToLineRegularIcon = StandaloneArrowDownToLineRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneArrowDownToLineRegularIcon);
exports.default = ForwardRef;
