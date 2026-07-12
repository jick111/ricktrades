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
exports.StandaloneAtRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneAtRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M16 7.75c-4.844 0-8.75 3.945-8.75 8.75A8.736 8.736 0 0 0 16 25.25c.313 0 .625.313.625.625A.64.64 0 0 1 16 26.5a9.97 9.97 0 0 1-10-10c0-5.508 4.453-10 10-10 5.508 0 10 4.492 10 10v.938a3.443 3.443 0 0 1-3.437 3.437c-1.329 0-2.461-.703-3.047-1.797A4.31 4.31 0 0 1 16 20.875a4.37 4.37 0 0 1-4.375-4.375c0-2.383 1.953-4.375 4.375-4.375 1.21 0 2.305.508 3.125 1.328v-.078c0-.312.273-.625.625-.625.313 0 .625.313.625.625v4.063c0 1.21.977 2.187 2.188 2.187 1.171 0 2.187-.977 2.187-2.187V16.5c0-4.805-3.945-8.75-8.75-8.75m3.125 8.75c0-1.094-.625-2.11-1.562-2.695-.977-.547-2.188-.547-3.125 0-.977.586-1.563 1.601-1.563 2.695 0 1.133.586 2.148 1.563 2.734.937.547 2.148.547 3.124 0 .938-.586 1.563-1.601 1.563-2.734' })));
exports.StandaloneAtRegularIcon = StandaloneAtRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneAtRegularIcon);
exports.default = ForwardRef;
