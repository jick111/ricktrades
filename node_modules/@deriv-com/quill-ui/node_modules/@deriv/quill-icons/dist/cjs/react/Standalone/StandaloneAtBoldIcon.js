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
exports.StandaloneAtBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneAtBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M16 8.375c-4.492 0-8.125 3.672-8.125 8.125A8.12 8.12 0 0 0 16 24.625a.95.95 0 0 1 .938.938c0 .546-.43.937-.938.937a9.97 9.97 0 0 1-10-10c0-5.508 4.453-10 10-10 5.508 0 10 4.492 10 10v1.094c0 1.992-1.64 3.593-3.594 3.593a3.57 3.57 0 0 1-2.968-1.523A4.63 4.63 0 0 1 16 21.187a4.65 4.65 0 0 1-4.687-4.687A4.676 4.676 0 0 1 16 11.813c1.094 0 2.148.43 2.93 1.054.195-.234.468-.43.82-.43a.95.95 0 0 1 .938.938v4.219c0 .976.742 1.718 1.718 1.718.938 0 1.719-.742 1.719-1.718V16.5c0-4.453-3.672-8.125-8.125-8.125m2.813 8.125c0-.977-.547-1.914-1.407-2.422-.898-.508-1.953-.508-2.812 0a2.77 2.77 0 0 0-1.406 2.422c0 1.016.507 1.953 1.406 2.46.86.509 1.914.509 2.812 0a2.87 2.87 0 0 0 1.407-2.46' })));
exports.StandaloneAtBoldIcon = StandaloneAtBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneAtBoldIcon);
exports.default = ForwardRef;
