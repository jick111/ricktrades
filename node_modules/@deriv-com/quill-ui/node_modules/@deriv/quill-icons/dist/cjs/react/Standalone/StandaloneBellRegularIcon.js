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
exports.StandaloneBellRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneBellRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M15.375 7.125c0-.312.273-.625.625-.625.313 0 .625.313.625.625v.664c3.125.313 5.625 2.969 5.625 6.211v1.172c0 1.68.664 3.32 1.875 4.531l.117.117c.313.313.508.782.508 1.211a1.75 1.75 0 0 1-1.758 1.758H8.97c-.977-.039-1.719-.781-1.719-1.758 0-.468.156-.898.508-1.21l.078-.118c1.21-1.21 1.914-2.851 1.914-4.531V14a6.237 6.237 0 0 1 5.625-6.21zM16 9c-2.773 0-5 2.266-5 5v1.172c0 2.031-.82 3.984-2.266 5.43l-.117.078a.63.63 0 0 0-.117.351c0 .274.195.469.469.469h14.023c.274 0 .508-.195.508-.469 0-.117-.078-.234-.156-.351l-.117-.078a7.71 7.71 0 0 1-2.266-5.47V14c0-2.734-2.227-5-5-5zm-1.21 15.43c.194.508.663.82 1.21.82.508 0 .977-.312 1.172-.82.117-.313.469-.508.781-.39a.655.655 0 0 1 .39.82A2.49 2.49 0 0 1 16 26.5c-1.094 0-2.031-.664-2.383-1.64a.654.654 0 0 1 .39-.82c.313-.118.665.077.782.39' })));
exports.StandaloneBellRegularIcon = StandaloneBellRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneBellRegularIcon);
exports.default = ForwardRef;
