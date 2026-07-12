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
exports.StandalonePenLineFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandalonePenLineFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'm22.445 7.281 1.524 1.524a2.523 2.523 0 0 1 0 3.554l-1.875 1.875-5.078-5.078 1.875-1.875a2.523 2.523 0 0 1 3.554 0M7.015 19.156l9.102-9.101 5.078 5.078-9.101 9.101c-.39.391-.899.703-1.446.86L5.922 26.46a.8.8 0 0 1-.899-.234.8.8 0 0 1-.234-.899l1.367-4.726a3.4 3.4 0 0 1 .86-1.446m7.423 5.469h11.875a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H14.438c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938' })));
exports.StandalonePenLineFillIcon = StandalonePenLineFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandalonePenLineFillIcon);
exports.default = ForwardRef;
