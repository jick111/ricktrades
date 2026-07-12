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
exports.StandaloneCircleEightFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneCircleEightFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M6 16.5a9.93 9.93 0 0 1 5-8.633c3.086-1.797 6.875-1.797 10 0 3.086 1.797 5 5.078 5 8.633 0 3.594-1.914 6.875-5 8.672-3.125 1.797-6.914 1.797-10 0-3.125-1.797-5-5.078-5-8.672m10.313-5h-.625a2.826 2.826 0 0 0-2.813 2.813c0 .624.195 1.21.508 1.64a3.12 3.12 0 0 0-1.133 2.422c0 1.758 1.367 3.125 3.125 3.125h1.25a3.11 3.11 0 0 0 3.125-3.125c0-.977-.469-1.836-1.172-2.422.352-.43.547-1.015.547-1.64 0-1.524-1.29-2.813-2.812-2.813m-.625 3.75c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h.624a.95.95 0 0 1 .938.938c0 .546-.43.937-.937.937zm.624 1.875h.313c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-1.25c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h.937' })));
exports.StandaloneCircleEightFillIcon = StandaloneCircleEightFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneCircleEightFillIcon);
exports.default = ForwardRef;
