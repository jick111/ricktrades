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
exports.StandaloneSterlingSignFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneSterlingSignFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M14.125 12.79v2.46H18.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-4.375v1.758a6.2 6.2 0 0 1-.898 3.203l-.04.039H21c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25H11c-.469 0-.898-.234-1.094-.625a1.2 1.2 0 0 1 0-1.25l1.172-1.953c.352-.586.547-1.25.547-1.914V17.75H11c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h.625v-2.46c0-2.774 2.227-5.04 5-5.04.547 0 1.055.117 1.602.273l3.164 1.055a1.25 1.25 0 0 1 .78 1.602c-.233.625-.937.976-1.562.78l-3.203-1.054c-.234-.078-.508-.156-.781-.156-1.406 0-2.5 1.133-2.5 2.54' })));
exports.StandaloneSterlingSignFillIcon = StandaloneSterlingSignFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneSterlingSignFillIcon);
exports.default = ForwardRef;
