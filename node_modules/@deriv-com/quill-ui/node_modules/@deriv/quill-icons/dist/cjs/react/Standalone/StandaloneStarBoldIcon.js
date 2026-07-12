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
exports.StandaloneStarBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneStarBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M15.96 6.5a.96.96 0 0 1 .86.547l2.696 5.508 5.976.898c.352.04.625.274.742.625a.92.92 0 0 1-.234.977l-4.336 4.297 1.016 6.054a.94.94 0 0 1-.352.938c-.312.195-.703.234-1.015.078l-5.352-2.89-5.313 2.89a1.05 1.05 0 0 1-1.015-.078c-.274-.235-.43-.586-.352-.938l1.016-6.054-4.336-4.297a.92.92 0 0 1-.234-.977c.117-.312.39-.586.742-.625l5.976-.898 2.696-5.508c.156-.313.468-.547.82-.547m0 3.086-2.03 4.258c-.157.273-.39.469-.703.508l-4.61.664 3.32 3.32c.235.234.352.547.274.82l-.781 4.688 4.101-2.188a.92.92 0 0 1 .899 0l4.101 2.188-.781-4.649a.81.81 0 0 1 .273-.82l3.32-3.36-4.609-.663c-.312-.04-.547-.235-.703-.508z' })));
exports.StandaloneStarBoldIcon = StandaloneStarBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneStarBoldIcon);
exports.default = ForwardRef;
