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
exports.StandalonePasskeyFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandalonePasskeyFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M7.758 24.234v-3.086c0-.585.156-1.132.508-1.64.312-.508.703-.899 1.25-1.172.898-.43 1.797-.781 2.773-1.016a14 14 0 0 1 2.852-.312h.898l.938.117a4.9 4.9 0 0 0 .468 2.578c.43.781 1.016 1.445 1.758 1.914v2.617zm14.531 1.993-1.406-1.368v-4.257a3.2 3.2 0 0 1-1.64-1.133c-.43-.586-.626-1.211-.626-1.953 0-.899.313-1.641.938-2.266a3.07 3.07 0 0 1 2.265-.937c.899 0 1.64.312 2.266.937.625.625.937 1.406.937 2.266 0 .703-.195 1.289-.546 1.836-.391.507-.86.898-1.485 1.132l1.133 1.172-1.406 1.367 1.406 1.368zm-7.148-10.079c-1.094 0-2.07-.39-2.852-1.171-.781-.782-1.172-1.758-1.172-2.852 0-1.133.39-2.07 1.172-2.852.781-.78 1.758-1.171 2.852-1.171 1.132 0 2.07.39 2.851 1.171.82.782 1.211 1.758 1.211 2.852s-.39 2.07-1.21 2.852c-.782.78-1.72 1.171-2.852 1.171m6.68 1.836c.35 0 .663-.156.859-.43a1.08 1.08 0 0 0 0-.976c-.196-.273-.508-.469-.86-.43-.351-.039-.664.157-.86.43a1.08 1.08 0 0 0 0 .977c.196.273.509.43.86.43' })));
exports.StandalonePasskeyFillIcon = StandalonePasskeyFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandalonePasskeyFillIcon);
exports.default = ForwardRef;
