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
exports.StandaloneBellSlashRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneBellSlashRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M18.266 21.5v.04l1.601 1.25H8.97A1.75 1.75 0 0 1 7.21 21.03c0-.43.195-.898.508-1.21l.117-.118c1.21-1.21 1.914-2.851 1.914-4.531v-.39l1.21.937a7.97 7.97 0 0 1-2.226 4.883l-.117.078a.63.63 0 0 0-.117.351c0 .274.195.469.469.469zM15.375 7.79v-.665c0-.312.273-.625.625-.625.313 0 .625.313.625.625v.664c3.125.313 5.625 2.969 5.625 6.211v1.172c0 1.68.664 3.32 1.875 4.531l.117.117c0 .04.04.04.078.078l-2.93-2.304a7.3 7.3 0 0 1-.39-2.422V14c0-2.734-2.266-5-5-5a4.98 4.98 0 0 0-3.594 1.523l-.976-.78a6.17 6.17 0 0 1 3.945-1.954m-.586 16.64c.195.508.664.82 1.211.82.508 0 .977-.312 1.172-.82.117-.313.469-.508.781-.39.352.116.508.468.39.82A2.49 2.49 0 0 1 16 26.5c-1.094 0-2.031-.664-2.383-1.64a.654.654 0 0 1 .39-.82c.313-.118.665.077.782.39M4.477 6.656l23.789 18.75c.234.196.312.625.078.86a.584.584 0 0 1-.86.117L3.734 7.633c-.273-.195-.351-.625-.117-.86.196-.273.625-.351.86-.117' })));
exports.StandaloneBellSlashRegularIcon = StandaloneBellSlashRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneBellSlashRegularIcon);
exports.default = ForwardRef;
