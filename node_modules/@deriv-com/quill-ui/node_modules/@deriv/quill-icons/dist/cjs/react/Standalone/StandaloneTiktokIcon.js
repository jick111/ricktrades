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
exports.StandaloneTiktokIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneTiktokIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M24.75 14.703c-1.758.04-3.398-.508-4.805-1.523v6.992c0 2.656-1.64 5-4.14 5.937a6.3 6.3 0 0 1-6.992-1.757 6.4 6.4 0 0 1-.82-7.227c1.25-2.305 3.827-3.594 6.484-3.242v3.515a2.95 2.95 0 0 0-3.282 1.055c-.703 1.055-.703 2.422.04 3.438.742 1.015 2.07 1.445 3.242 1.054a2.93 2.93 0 0 0 2.03-2.773V6.5h3.438c0 .313 0 .586.078.898a4.62 4.62 0 0 0 2.11 3.125c.742.508 1.68.782 2.617.782z' })));
exports.StandaloneTiktokIcon = StandaloneTiktokIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneTiktokIcon);
exports.default = ForwardRef;
