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
exports.StandaloneTriangleExclamationBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneTriangleExclamationBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M15.688 9.82 7.953 22.516c-.078.117-.078.195-.078.312 0 .313.234.547.547.547h15.117c.313 0 .586-.234.586-.547 0-.117-.04-.195-.117-.312L16.273 9.82A.29.29 0 0 0 16 9.625c-.156 0-.234.078-.312.195m-1.602-.976A2.25 2.25 0 0 1 16 7.75c.742 0 1.484.43 1.875 1.094l7.734 12.695c.235.39.391.82.391 1.29 0 1.327-1.094 2.421-2.46 2.421H8.421A2.434 2.434 0 0 1 6 22.828q0-.703.352-1.289zm3.164 12.031c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25m-.312-7.187v3.75c0 .546-.43.937-.938.937-.547 0-.937-.39-.937-.937v-3.75c0-.508.39-.938.937-.938a.95.95 0 0 1 .938.938' })));
exports.StandaloneTriangleExclamationBoldIcon = StandaloneTriangleExclamationBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneTriangleExclamationBoldIcon);
exports.default = ForwardRef;
