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
exports.StandaloneArrowUpFromBracketBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneArrowUpFromBracketBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'm16.664 6.773 4.961 5c.39.391.39.977 0 1.329-.352.39-.937.39-1.328 0l-3.399-3.399v9.61c0 .546-.39.937-.937.937a.925.925 0 0 1-.938-.937v-9.61l-3.398 3.399a.856.856 0 0 1-1.29 0c-.39-.352-.39-.938 0-1.329l5-5c.352-.351.938-.351 1.33 0M9.125 19.938v3.125c0 .898.664 1.562 1.563 1.562h10.625c.859 0 1.562-.664 1.562-1.562v-3.125c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938v3.125a3.443 3.443 0 0 1-3.437 3.437H10.688a3.42 3.42 0 0 1-3.438-3.437v-3.125c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938' })));
exports.StandaloneArrowUpFromBracketBoldIcon = StandaloneArrowUpFromBracketBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneArrowUpFromBracketBoldIcon);
exports.default = ForwardRef;
