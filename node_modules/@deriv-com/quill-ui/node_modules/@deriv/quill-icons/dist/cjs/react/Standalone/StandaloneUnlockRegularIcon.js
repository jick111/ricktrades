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
exports.StandaloneUnlockRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneUnlockRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M12.25 11.5V14h9.375a3.134 3.134 0 0 1 3.125 3.125v6.25a3.11 3.11 0 0 1-3.125 3.125h-11.25c-1.758 0-3.125-1.367-3.125-3.125v-6.25A3.11 3.11 0 0 1 10.375 14H11v-2.5c0-2.734 2.227-5 5-5a4.956 4.956 0 0 1 4.766 3.594c.117.312-.078.664-.43.781-.313.078-.664-.078-.742-.43C19.125 8.883 17.68 7.75 16 7.75c-2.07 0-3.75 1.68-3.75 3.75M8.5 17.125v6.25c0 1.055.82 1.875 1.875 1.875h11.25c1.016 0 1.875-.82 1.875-1.875v-6.25c0-1.016-.86-1.875-1.875-1.875h-11.25c-1.055 0-1.875.86-1.875 1.875' })));
exports.StandaloneUnlockRegularIcon = StandaloneUnlockRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneUnlockRegularIcon);
exports.default = ForwardRef;
