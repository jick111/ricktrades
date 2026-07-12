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
exports.StandaloneThumbsDownFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneThumbsDownFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M18.227 25.25c-1.016.195-1.993-.469-2.227-1.484l-.078-.47c-.235-1.288-.977-2.46-1.992-3.28l-.274-.235c-.898-.703-1.406-1.758-1.406-2.93v-4.335c0-1.25.625-2.422 1.64-3.125l1.524-.977a3.63 3.63 0 0 1 2.07-.664h3.828c1.016 0 1.875.86 1.875 1.875 0 .156-.039.313-.078.43a1.84 1.84 0 0 1 1.328 1.758c0 .39-.117.703-.273.976.86.195 1.523.938 1.523 1.836 0 .625-.273 1.133-.703 1.484.586.313 1.016.938 1.016 1.641 0 1.055-.86 1.875-1.875 1.875H18.5c.508.938.898 1.914 1.094 2.969l.117.43c.195 1.015-.469 1.992-1.484 2.226M7.25 21.5c-.703 0-1.25-.547-1.25-1.25V11.5c0-.664.547-1.25 1.25-1.25h2.5c.664 0 1.25.586 1.25 1.25v8.75c0 .703-.586 1.25-1.25 1.25z' })));
exports.StandaloneThumbsDownFillIcon = StandaloneThumbsDownFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneThumbsDownFillIcon);
exports.default = ForwardRef;
