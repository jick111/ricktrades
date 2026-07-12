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
exports.StandalonePersonChalkboardBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandalonePersonChalkboardBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M11 10.25a1.87 1.87 0 0 1-1.64-.937c-.352-.547-.352-1.29 0-1.876.35-.546.937-.937 1.64-.937.664 0 1.25.39 1.602.938.351.585.351 1.328 0 1.875-.352.585-.938.937-1.602.937m-.547 3.125c-.039 0-.078.04-.078.04v4.96h1.25v-5zm-.078 12.188c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937V15.25l-1.719 2.969a.876.876 0 0 1-1.25.351.876.876 0 0 1-.351-1.25l2.265-4.062c.625-1.055 1.758-1.758 3.008-1.758H16V8.375c0-1.016.82-1.875 1.875-1.875h8.75c1.016 0 1.875.86 1.875 1.875v8.75c0 1.055-.86 1.875-1.875 1.875h-8.75A1.85 1.85 0 0 1 16 17.125V15.25h1.875v1.875h8.75v-8.75h-8.75V11.5h.938a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H13.5v12.188c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937V20.25h-1.25z' })));
exports.StandalonePersonChalkboardBoldIcon = StandalonePersonChalkboardBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandalonePersonChalkboardBoldIcon);
exports.default = ForwardRef;
