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
exports.StandaloneLanguageRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneLanguageRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M15.375 10.25H6c-.703 0-1.25.586-1.25 1.25v10c0 .703.547 1.25 1.25 1.25h9.375zm1.25 0v12.5H26c.664 0 1.25-.547 1.25-1.25v-10c0-.664-.586-1.25-1.25-1.25zM28.5 11.5v10c0 1.406-1.133 2.5-2.5 2.5H6a2.47 2.47 0 0 1-2.5-2.5v-10C3.5 10.133 4.594 9 6 9h20c1.367 0 2.5 1.133 2.5 2.5m-18.203 1.68 2.5 6.25c.156.312 0 .664-.352.78-.312.157-.664 0-.78-.35l-.352-.82H8.148l-.351.82c-.117.35-.469.507-.781.35-.352-.116-.508-.468-.352-.78l2.5-6.25a.59.59 0 0 1 .586-.43c.234 0 .469.156.547.43m-.547 1.914L8.656 17.75h2.149zm13.125-1.719V14h2.5c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-.195l-.157.469c-.39 1.015-.976 1.953-1.718 2.695.117.078.234.156.39.234l.742.47c.274.155.391.546.196.859a.62.62 0 0 1-.86.195l-.742-.43c-.234-.156-.468-.312-.703-.508-.312.235-.664.43-1.015.625l-.665.352c-.312.156-.703 0-.859-.313-.156-.273 0-.664.273-.82l.704-.351c.195-.079.39-.196.586-.313l-.82-.82c-.235-.274-.235-.664 0-.899.273-.234.663-.234.898 0l.898.899c.664-.625 1.172-1.407 1.524-2.305v-.039h-4.727a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h2.5v-.625c0-.312.273-.625.625-.625.313 0 .625.313.625.625' })));
exports.StandaloneLanguageRegularIcon = StandaloneLanguageRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneLanguageRegularIcon);
exports.default = ForwardRef;
