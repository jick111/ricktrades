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
exports.StandaloneStarRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneStarRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M13.578 13.102c-.195.39-.547.625-.937.703l-5.352.78 3.867 3.868c.313.274.43.703.352 1.094l-.899 5.469 4.766-2.578c.39-.196.82-.196 1.21 0l4.767 2.578-.899-5.47c-.078-.39.04-.82.352-1.093l3.867-3.867-5.352-.781c-.43-.078-.78-.313-.937-.703L15.96 8.18zm7.735 13.32h.039L16 23.532l-5.352 2.89c-.312.156-.703.117-1.015-.078-.274-.235-.43-.586-.352-.938l1.016-6.054-4.336-4.297a.92.92 0 0 1-.234-.977c.117-.312.39-.586.742-.625l5.976-.898 2.696-5.508c.156-.313.468-.547.82-.547a.96.96 0 0 1 .86.547l2.695 5.508 5.976.898c.352.04.625.313.742.625a.92.92 0 0 1-.234.977l-4.336 4.297 1.016 6.054c.078.352-.078.703-.352.938a1.05 1.05 0 0 1-1.015.078' })));
exports.StandaloneStarRegularIcon = StandaloneStarRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneStarRegularIcon);
exports.default = ForwardRef;
