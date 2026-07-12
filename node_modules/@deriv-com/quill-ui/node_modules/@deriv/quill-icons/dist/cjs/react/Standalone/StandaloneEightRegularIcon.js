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
exports.StandaloneEightRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneEightRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M21.625 12.438c0 1.64-.82 3.046-2.07 3.906 1.562.742 2.695 2.343 2.695 4.218a4.676 4.676 0 0 1-4.687 4.688h-3.125a4.65 4.65 0 0 1-4.688-4.687 4.66 4.66 0 0 1 2.656-4.22c-1.25-.859-2.031-2.265-2.031-3.905a4.676 4.676 0 0 1 4.688-4.688h1.874a4.7 4.7 0 0 1 4.688 4.688m-4.687 4.687h-2.5A3.443 3.443 0 0 0 11 20.563 3.42 3.42 0 0 0 14.438 24h3.124A3.443 3.443 0 0 0 21 20.563c0-1.875-1.562-3.438-3.437-3.438zm0-1.25a3.443 3.443 0 0 0 3.437-3.437c0-1.876-1.562-3.438-3.437-3.438h-1.875a3.443 3.443 0 0 0-3.438 3.438c0 1.914 1.523 3.437 3.398 3.437h1.914' })));
exports.StandaloneEightRegularIcon = StandaloneEightRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneEightRegularIcon);
exports.default = ForwardRef;
