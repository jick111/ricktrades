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
exports.StandaloneSixFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneSixFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'm18.813 9.82-2.5 2.97c3.28.155 5.937 2.89 5.937 6.21A6.243 6.243 0 0 1 16 25.25 6.22 6.22 0 0 1 9.75 19v-.156c.04-1.446.547-2.852 1.484-3.946l5.664-6.68c.43-.546 1.25-.585 1.758-.155.547.43.586 1.25.157 1.757M19.75 19c0-1.328-.742-2.54-1.875-3.242-1.172-.664-2.617-.664-3.75 0-1.172.703-1.875 1.914-1.875 3.242 0 1.367.703 2.578 1.875 3.281 1.133.664 2.578.664 3.75 0 1.133-.703 1.875-1.914 1.875-3.281' })));
exports.StandaloneSixFillIcon = StandaloneSixFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneSixFillIcon);
exports.default = ForwardRef;
