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
exports.StandalonePhoneBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandalonePhoneBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'm20.648 17.281 4.375 1.875a1.535 1.535 0 0 1 .938 1.758l-.938 4.375c-.156.703-.82 1.25-1.523 1.25-.273 0-.508-.039-.742-.039-.39 0-.781-.04-1.133-.078C12.835 25.484 6 18.062 6 9c0-.703.508-1.367 1.21-1.523l4.376-.938a1.535 1.535 0 0 1 1.758.938l1.875 4.375c.273.625.117 1.367-.43 1.796l-1.601 1.329a12.14 12.14 0 0 0 4.335 4.336l1.329-1.602c.43-.547 1.171-.703 1.796-.43m2.579 7.344.82-3.867-3.906-1.68-1.133 1.406a1.91 1.91 0 0 1-2.422.43 13.94 13.94 0 0 1-5-5 1.91 1.91 0 0 1 .43-2.422l1.406-1.133-1.68-3.906-3.867.82c.117 8.438 6.914 15.235 15.352 15.352' })));
exports.StandalonePhoneBoldIcon = StandalonePhoneBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandalonePhoneBoldIcon);
exports.default = ForwardRef;
