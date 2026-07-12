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
exports.StandaloneThreeRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneThreeRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M9.75 8.375c0-.312.273-.625.625-.625H21c.234 0 .469.156.547.43a.54.54 0 0 1-.156.664l-6.953 6.406h2.812c2.734 0 5 2.266 5 5 0 2.773-2.266 5-5 5h-4.023c-1.407 0-2.735-.781-3.36-2.07l-.078-.117a.64.64 0 0 1 .274-.86.64.64 0 0 1 .859.274l.078.156c.43.86 1.29 1.367 2.227 1.367h4.023a3.751 3.751 0 0 0 0-7.5h-4.375c-.273 0-.508-.156-.586-.39a.54.54 0 0 1 .156-.665L19.398 9h-9.023a.617.617 0 0 1-.625-.625' })));
exports.StandaloneThreeRegularIcon = StandaloneThreeRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneThreeRegularIcon);
exports.default = ForwardRef;
