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
exports.StandaloneBullhornFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneBullhornFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M24.75 7.75v5.781c.703.352 1.25 1.29 1.25 2.344 0 1.094-.547 2.031-1.25 2.383V24c0 .508-.312.977-.781 1.172a1.26 1.26 0 0 1-1.367-.274l-1.72-1.718a10 10 0 0 0-7.07-2.93H13.5v5c0 .703-.586 1.25-1.25 1.25h-2.5c-.703 0-1.25-.547-1.25-1.25v-5a2.47 2.47 0 0 1-2.5-2.5V14c0-1.367 1.094-2.5 2.5-2.5h5.313a10 10 0 0 0 7.07-2.93l1.719-1.68a1.26 1.26 0 0 1 1.367-.273c.468.196.781.664.781 1.133m-2.5 3.008C19.945 12.868 16.938 14 13.813 14H13.5v3.75h.313c3.124 0 6.132 1.172 8.437 3.281V10.758' })));
exports.StandaloneBullhornFillIcon = StandaloneBullhornFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneBullhornFillIcon);
exports.default = ForwardRef;
