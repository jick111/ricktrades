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
exports.StandaloneVideoRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneVideoRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M7.25 10.25c-.703 0-1.25.586-1.25 1.25v10c0 .703.547 1.25 1.25 1.25h10c.664 0 1.25-.547 1.25-1.25v-10c0-.664-.586-1.25-1.25-1.25zm-2.5 1.25c0-1.367 1.094-2.5 2.5-2.5h10c1.367 0 2.5 1.133 2.5 2.5v10c0 1.406-1.133 2.5-2.5 2.5h-10a2.47 2.47 0 0 1-2.5-2.5zm20.273 11.094L21 20.367v-1.445l4.61 2.578c.038 0 .078.04.117.04a.267.267 0 0 0 .273-.274v-9.493a.267.267 0 0 0-.273-.273c-.04 0-.079.04-.118.04L21 14.116v-1.445l4.023-2.227c.235-.117.47-.195.704-.195.82 0 1.523.703 1.523 1.523v9.493c0 .82-.703 1.484-1.523 1.484-.235 0-.47-.04-.704-.156' })));
exports.StandaloneVideoRegularIcon = StandaloneVideoRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneVideoRegularIcon);
exports.default = ForwardRef;
