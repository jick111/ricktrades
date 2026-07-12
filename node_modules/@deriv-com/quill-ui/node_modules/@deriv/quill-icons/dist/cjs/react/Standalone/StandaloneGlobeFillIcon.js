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
exports.StandaloneGlobeFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneGlobeFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M19.75 16.5c0 .898-.078 1.719-.156 2.5h-7.227a25 25 0 0 1-.117-2.5c0-.86.04-1.68.117-2.5h7.227c.078.82.156 1.64.156 2.5m1.094-2.5h4.804c.235.82.352 1.64.352 2.5 0 .898-.117 1.719-.352 2.5h-4.804c.078-.781.156-1.64.156-2.5s-.078-1.68-.156-2.5m4.414-1.25h-4.57c-.391-2.46-1.172-4.57-2.149-5.898 3.047.82 5.547 3.007 6.719 5.898m-5.82 0h-6.915a16.5 16.5 0 0 1 1.055-3.672c.43-.937.86-1.601 1.328-2.031.43-.39.781-.547 1.094-.547.273 0 .625.156 1.055.547.468.43.898 1.094 1.328 2.031.43 1.016.82 2.266 1.055 3.672m-8.165 0h-4.57c1.172-2.89 3.672-5.078 6.719-5.898-.977 1.328-1.758 3.437-2.149 5.898M6.313 14h4.804c-.078.82-.117 1.64-.117 2.5s.04 1.719.117 2.5H6.312C6.079 18.219 6 17.398 6 16.5c0-.86.078-1.68.313-2.5m7.265 9.96a16.2 16.2 0 0 1-1.055-3.71h6.915a16.2 16.2 0 0 1-1.055 3.71c-.43.938-.86 1.602-1.328 2.032-.43.39-.782.508-1.055.508-.312 0-.664-.117-1.094-.508-.469-.43-.898-1.094-1.328-2.031m-2.305-3.71c.391 2.5 1.172 4.61 2.149 5.938-3.047-.82-5.547-3.008-6.719-5.938zm13.985 0c-1.172 2.93-3.672 5.117-6.719 5.938 1.016-1.329 1.758-3.438 2.148-5.938z' })));
exports.StandaloneGlobeFillIcon = StandaloneGlobeFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneGlobeFillIcon);
exports.default = ForwardRef;
