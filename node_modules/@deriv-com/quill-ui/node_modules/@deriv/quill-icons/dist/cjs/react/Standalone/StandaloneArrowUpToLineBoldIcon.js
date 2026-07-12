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
exports.StandaloneArrowUpToLineBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneArrowUpToLineBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M9.438 7.75h13.125a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H9.438c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938m7.226 5.313 5 5.312c.352.39.352.977-.039 1.328s-.977.352-1.328-.039l-3.36-3.594v8.242c0 .547-.43.938-.937.938-.547 0-.937-.39-.937-.937V16.07l-3.399 3.594c-.351.39-.937.39-1.328.04-.39-.352-.39-.938-.04-1.329l5-5.312c.196-.196.43-.313.704-.313.234 0 .508.117.664.313' })));
exports.StandaloneArrowUpToLineBoldIcon = StandaloneArrowUpToLineBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneArrowUpToLineBoldIcon);
exports.default = ForwardRef;
