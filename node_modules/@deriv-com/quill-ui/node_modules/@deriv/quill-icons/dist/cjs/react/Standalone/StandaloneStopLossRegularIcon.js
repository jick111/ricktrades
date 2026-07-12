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
exports.StandaloneStopLossRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneStopLossRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M12.016 21.93c-.899 0-1.641-.157-2.266-.47a4.54 4.54 0 0 1-1.562-1.288l1.171-1.094a4.2 4.2 0 0 0 1.211 1.016q.645.351 1.524.351.996 0 1.523-.468c.352-.313.508-.704.508-1.211 0-.391-.117-.743-.352-.977s-.664-.43-1.289-.547l-.937-.156c-1.016-.195-1.758-.508-2.266-1.016-.547-.468-.781-1.133-.781-1.953 0-.469.078-.898.234-1.25.196-.39.43-.703.743-.937.312-.274.703-.47 1.171-.625.43-.117.938-.196 1.524-.196.781 0 1.445.118 2.031.43.586.234 1.094.664 1.485 1.172l-1.172 1.055a3.4 3.4 0 0 0-.977-.86c-.39-.195-.898-.312-1.484-.312s-1.055.117-1.367.351c-.352.235-.508.586-.508 1.055s.156.781.39 1.016q.41.293 1.29.468l.937.196c1.015.195 1.797.547 2.265 1.015.508.47.743 1.133.743 1.992 0 .47-.078.938-.235 1.329-.195.39-.43.742-.78 1.015-.313.313-.704.508-1.173.664a5.1 5.1 0 0 1-1.601.235m5.82-.196V11.266h1.68v8.984h4.257v1.484z' })));
exports.StandaloneStopLossRegularIcon = StandaloneStopLossRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneStopLossRegularIcon);
exports.default = ForwardRef;
