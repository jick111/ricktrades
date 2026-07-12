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
exports.StandaloneAppStoreIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneAppStoreIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'm15.96 11.227-.312-.586c-.234-.391-.742-.508-1.093-.313a.825.825 0 0 0-.313 1.094l.82 1.406-2.617 4.531h-2.03a.784.784 0 0 0-.782.782c0 .43.351.78.781.78h7.266c.351-.624-.117-1.562-.899-1.562h-2.5l3.438-5.937c.234-.39.078-.86-.313-1.094-.351-.195-.86-.078-1.054.313zm-3.046 8.515c-.43-.469-.937-.625-1.601-.43l-.547.977a.78.78 0 0 0 .273 1.094c.39.195.899.078 1.094-.313zm6.602-2.383c-1.055-1.836-1.836-3.164-2.344-4.062-.508.39-.977 1.523-.313 2.695.664 1.133 1.641 2.813 2.97 5.078.194.39.702.508 1.093.313.351-.235.508-.703.273-1.094l-.78-1.367h1.17c.43 0 .782-.352.782-.781a.784.784 0 0 0-.781-.782zM16 6.812a9.686 9.686 0 0 1 9.688 9.688A9.686 9.686 0 0 1 16 26.188 9.686 9.686 0 0 1 6.313 16.5 9.686 9.686 0 0 1 16 6.813m8.438 9.688c0-4.648-3.829-8.437-8.438-8.437-4.687 0-8.437 3.828-8.437 8.437A8.427 8.427 0 0 0 16 24.938c4.648 0 8.438-3.79 8.438-8.438' })));
exports.StandaloneAppStoreIcon = StandaloneAppStoreIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneAppStoreIcon);
exports.default = ForwardRef;
