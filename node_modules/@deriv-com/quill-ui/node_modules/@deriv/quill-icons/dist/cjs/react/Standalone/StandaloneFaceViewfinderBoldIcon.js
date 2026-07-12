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
exports.StandaloneFaceViewfinderBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneFaceViewfinderBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M6 8.688C6 7.516 6.977 6.5 8.188 6.5h3.124a.95.95 0 0 1 .938.938c0 .546-.43.937-.937.937H8.187a.31.31 0 0 0-.312.313v3.124c0 .547-.43.938-.937.938-.547 0-.938-.39-.938-.937zm13.75-1.25c0-.508.39-.938.938-.938h3.125C24.984 6.5 26 7.516 26 8.688v3.124c0 .547-.43.938-.937.938-.547 0-.938-.39-.938-.937V8.687a.336.336 0 0 0-.312-.312h-3.125c-.547 0-.938-.39-.938-.937M6.938 20.25a.95.95 0 0 1 .937.938v3.125c0 .195.117.312.313.312h3.124a.95.95 0 0 1 .938.938c0 .546-.43.937-.937.937H8.187A2.184 2.184 0 0 1 6 24.313v-3.125c0-.508.39-.938.938-.938m18.125 0a.95.95 0 0 1 .937.938v3.125c0 1.21-1.016 2.187-2.187 2.187h-3.125c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h3.125a.31.31 0 0 0 .312-.312v-3.125c0-.508.39-.938.938-.938m-9.688-5.312c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938m2.188.937c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937M16 12.125c-1.602 0-3.008.86-3.79 2.188-.82 1.367-.82 3.046 0 4.374.782 1.368 2.188 2.188 3.79 2.188 1.563 0 2.969-.82 3.75-2.187.82-1.329.82-3.008 0-4.375-.781-1.329-2.187-2.188-3.75-2.188m0 10.625a6.22 6.22 0 0 1-5.43-3.125c-1.133-1.914-1.133-4.297 0-6.25 1.133-1.914 3.164-3.125 5.43-3.125 2.227 0 4.258 1.21 5.39 3.125 1.133 1.953 1.133 4.336 0 6.25-1.132 1.953-3.163 3.125-5.39 3.125m-1.64-5.312c.312.585.937.937 1.64.937.664 0 1.29-.352 1.602-.937.195-.274.546-.391.859-.196.312.156.39.547.234.86-.547.898-1.562 1.562-2.695 1.562-1.172 0-2.187-.664-2.734-1.562-.157-.313-.079-.704.234-.86a.62.62 0 0 1 .86.195' })));
exports.StandaloneFaceViewfinderBoldIcon = StandaloneFaceViewfinderBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneFaceViewfinderBoldIcon);
exports.default = ForwardRef;
