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
exports.StandaloneMoonBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneMoonBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M14.125 10.367a6.9 6.9 0 0 0-3.75 6.133c0 3.828 3.047 6.875 6.836 6.875.508 0 1.016-.04 1.523-.156a8.75 8.75 0 0 1-5.898-8.282c0-1.68.469-3.242 1.289-4.57m2.422-2.578h1.406c.274.04.508.234.547.508a.56.56 0 0 1-.273.664c-.157.078-.274.156-.391.234l-.469.352c-.078.039-.117.078-.156.117a6.85 6.85 0 0 0-2.5 5.313c0 3.789 3.086 6.836 6.836 6.875h.156c.235-.04.43-.04.625-.04.117-.039.274-.039.43-.078.273-.039.547.078.664.313.117.273.078.547-.117.742-.117.117-.196.195-.313.273-.195.157-.351.313-.547.47-.078.038-.156.116-.234.155a8.73 8.73 0 0 1-5 1.563c-4.805 0-8.711-3.906-8.711-8.75 0-4.61 3.555-8.36 8.047-8.71' })));
exports.StandaloneMoonBoldIcon = StandaloneMoonBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneMoonBoldIcon);
exports.default = ForwardRef;
