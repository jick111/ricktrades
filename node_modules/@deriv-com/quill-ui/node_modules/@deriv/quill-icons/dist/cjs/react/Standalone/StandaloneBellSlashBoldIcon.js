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
exports.StandaloneBellSlashBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneBellSlashBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'm4.984 6.734 5.782 4.493c.898-1.368 2.304-2.383 3.984-2.696V7.75c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25v.781c2.852.547 5 3.086 5 6.094v1.016c0 1.757.586 3.476 1.68 4.882l.586.704c.195.273.273.625.156.898l3.437 2.734c.43.313.508.899.157 1.29-.313.43-.899.507-1.29.156L3.853 8.18c-.43-.313-.508-.899-.157-1.29.313-.43.899-.507 1.29-.156m7.266 5.664 8.828 6.915a9.6 9.6 0 0 1-.703-3.672v-1.016c0-2.383-1.992-4.375-4.375-4.375-1.602 0-3.008.86-3.75 2.148m7.11 10.352H8.187c-.391 0-.704-.195-.86-.508-.156-.312-.117-.703.117-1.015l.586-.704c1.094-1.406 1.719-3.125 1.719-4.882v-.43l1.797 1.406c-.156 1.524-.664 3.008-1.485 4.258h6.915zM18.5 24c0 .664-.273 1.328-.742 1.797S16.664 26.5 16 26.5s-1.328-.234-1.797-.703S13.5 24.664 13.5 24h5' })));
exports.StandaloneBellSlashBoldIcon = StandaloneBellSlashBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneBellSlashBoldIcon);
exports.default = ForwardRef;
