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
exports.StandaloneEyeFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneEyeFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M16 7.75c3.125 0 5.664 1.445 7.5 3.164 1.836 1.68 3.047 3.711 3.633 5.117a1.4 1.4 0 0 1 0 .977c-.586 1.367-1.797 3.398-3.633 5.117S19.125 25.25 16 25.25c-3.164 0-5.703-1.406-7.54-3.125-1.835-1.719-3.046-3.75-3.632-5.117a1.4 1.4 0 0 1 0-.977c.586-1.406 1.797-3.437 3.633-5.117C10.297 9.195 12.836 7.75 16 7.75m-5.625 8.75a5.6 5.6 0 0 0 2.813 4.883c1.718 1.015 3.867 1.015 5.624 0 1.72-1.016 2.813-2.852 2.813-4.883 0-1.992-1.094-3.828-2.812-4.844-1.758-1.015-3.907-1.015-5.625 0a5.58 5.58 0 0 0-2.813 4.844M16 14c0-.273-.078-.508-.156-.781-.078-.196.078-.469.312-.469a3.77 3.77 0 0 1 3.438 2.813c.547 1.992-.625 4.023-2.657 4.57a3.72 3.72 0 0 1-4.57-2.656 3 3 0 0 1-.117-.782c-.04-.234.234-.39.43-.312.273.078.508.117.82.117 1.367 0 2.5-1.094 2.5-2.5' })));
exports.StandaloneEyeFillIcon = StandaloneEyeFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneEyeFillIcon);
exports.default = ForwardRef;
