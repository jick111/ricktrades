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
exports.StandaloneBellOnRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneBellOnRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M27.172 6.852a.64.64 0 0 1-.274.859l-2.5 1.25c-.312.156-.703 0-.859-.274a.64.64 0 0 1 .273-.859l2.5-1.25a.64.64 0 0 1 .86.274m-11.797.273c0-.312.273-.625.625-.625.313 0 .625.313.625.625v.664c3.125.313 5.625 2.969 5.625 6.211v1.172c0 1.68.664 3.32 1.875 4.531l.117.117c.313.313.508.782.508 1.211a1.75 1.75 0 0 1-1.758 1.758H8.97c-.977-.039-1.719-.781-1.719-1.758 0-.468.156-.898.508-1.21l.078-.118a6.48 6.48 0 0 0 1.914-4.57V14a6.237 6.237 0 0 1 5.625-6.21zM16 9c-2.773 0-5 2.266-5 5v1.172c0 2.031-.82 3.984-2.266 5.43l-.117.117c-.078.078-.156.195-.156.312 0 .274.234.508.508.508h14.023a.517.517 0 0 0 .508-.508c0-.117-.078-.234-.156-.312l-.117-.117a7.7 7.7 0 0 1-2.266-5.43V14c0-2.734-2.227-5-5-5zm-1.21 15.43c.194.508.663.82 1.21.82.508 0 .977-.312 1.172-.82.117-.313.469-.508.781-.39a.655.655 0 0 1 .39.82A2.49 2.49 0 0 1 16 26.5c-1.094 0-2.031-.664-2.383-1.64a.654.654 0 0 1 .39-.82c.313-.118.665.077.782.39M3.5 13.375c0-.312.273-.625.625-.625H7.25c.313 0 .625.313.625.625A.64.64 0 0 1 7.25 14H4.125a.617.617 0 0 1-.625-.625m21.25-.625h3.125c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H24.75a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625M5.063 7.71a.64.64 0 0 1-.274-.858.64.64 0 0 1 .86-.274l2.5 1.25c.312.156.43.547.273.86-.156.273-.547.43-.86.273z' })));
exports.StandaloneBellOnRegularIcon = StandaloneBellOnRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneBellOnRegularIcon);
exports.default = ForwardRef;
