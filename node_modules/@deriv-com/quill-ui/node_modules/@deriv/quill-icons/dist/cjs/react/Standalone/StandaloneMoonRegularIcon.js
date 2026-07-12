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
exports.StandaloneMoonRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneMoonRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M15.922 9.117A7.51 7.51 0 0 0 9.75 16.5c0 4.18 3.32 7.5 7.46 7.5a7.77 7.77 0 0 0 3.673-.937c-4.14-.352-7.422-3.868-7.422-8.125 0-2.266.937-4.336 2.46-5.82m2.578-.82a.56.56 0 0 1-.273.664 6.85 6.85 0 0 0-3.516 5.977 6.86 6.86 0 0 0 6.875 6.874c.39 0 .781 0 1.172-.078.273-.039.547.078.664.313.117.273.078.547-.117.742a8.7 8.7 0 0 1-6.094 2.461c-4.805 0-8.711-3.906-8.711-8.75 0-4.805 3.906-8.75 8.71-8.75.235 0 .509.04.743.04.274.038.508.233.547.507' })));
exports.StandaloneMoonRegularIcon = StandaloneMoonRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneMoonRegularIcon);
exports.default = ForwardRef;
