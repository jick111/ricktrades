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
exports.LegacyLogout1pxIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyLogout1pxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#333', d: 'M8.5 1a1.5 1.5 0 0 1 1.493 1.356L10 2.5v1a.5.5 0 0 1-.992.09L9 3.5v-1a.5.5 0 0 0-.41-.492L8.5 2h-6a.5.5 0 0 0-.492.41L2 2.5v11a.5.5 0 0 0 .41.492L2.5 14h6a.5.5 0 0 0 .492-.41L9 13.5v-1a.5.5 0 0 1 .992-.09l.008.09v1a1.5 1.5 0 0 1-1.356 1.493L8.5 15h-6a1.5 1.5 0 0 1-1.493-1.355L1 13.5v-11a1.5 1.5 0 0 1 1.356-1.493L2.5 1zm3.284 3.589.07.057 3 3 .011.013.033.039-.044-.052A.5.5 0 0 1 15 8v.02l-.005.052L15 8a.5.5 0 0 1-.089.284l-.013.018-.033.04-.011.012-3 3a.5.5 0 0 1-.765-.638l.057-.07L13.293 8.5 4.5 8.5a.5.5 0 0 1-.09-.992L4.5 7.5l8.793-.001-2.147-2.145a.5.5 0 0 1-.057-.638l.057-.07a.5.5 0 0 1 .638-.057' })));
exports.LegacyLogout1pxIcon = LegacyLogout1pxIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyLogout1pxIcon);
exports.default = ForwardRef;
