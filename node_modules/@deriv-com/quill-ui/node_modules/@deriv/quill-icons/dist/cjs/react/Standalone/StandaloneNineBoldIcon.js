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
exports.StandaloneNineBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneNineBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M11.625 14A4.37 4.37 0 0 0 16 18.375c1.25 0 2.383-.508 3.164-1.367l.234-.235A4.44 4.44 0 0 0 20.375 14c0-2.383-1.992-4.375-4.375-4.375-2.422 0-4.375 1.992-4.375 4.375m4.922 6.25H16A6.22 6.22 0 0 1 9.75 14 6.243 6.243 0 0 1 16 7.75c3.438 0 6.25 2.813 6.25 6.25 0 1.64-.625 3.125-1.64 4.219l-5.47 6.718c-.312.391-.898.43-1.328.118-.39-.313-.43-.899-.117-1.328z' })));
exports.StandaloneNineBoldIcon = StandaloneNineBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneNineBoldIcon);
exports.default = ForwardRef;
