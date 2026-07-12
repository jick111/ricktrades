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
exports.StandalonePlaceholderBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandalonePlaceholderBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M10.688 7.75h.624a.95.95 0 0 1 .938.938c0 .546-.43.937-.937.937h-.626c-.898 0-1.562.703-1.562 1.563v.624c0 .547-.43.938-.937.938-.547 0-.938-.39-.938-.937v-.626a3.443 3.443 0 0 1 3.438-3.437M8.188 14a.95.95 0 0 1 .937.938v3.124c0 .547-.43.938-.937.938-.547 0-.938-.39-.938-.937v-3.125c0-.508.39-.938.938-.938m15.625 0a.95.95 0 0 1 .937.938v3.124c0 .547-.43.938-.937.938-.547 0-.938-.39-.938-.937v-3.125c0-.508.39-.938.938-.938m0-1.25c-.547 0-.938-.39-.938-.937v-.626c0-.859-.703-1.562-1.562-1.562h-.625c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h.625c1.875 0 3.437 1.563 3.437 3.438v.624c0 .547-.43.938-.937.938m.937 8.438v.625a3.443 3.443 0 0 1-3.437 3.437h-.625c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h.625c.859 0 1.562-.664 1.562-1.562v-.625c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938m-15.625 0v.625c0 .898.664 1.562 1.563 1.562h.624a.95.95 0 0 1 .938.938c0 .546-.43.937-.937.937h-.626a3.42 3.42 0 0 1-3.437-3.437v-.625c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938m5.313 4.062c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h3.124a.95.95 0 0 1 .938.938c0 .546-.43.937-.937.937zM13.5 8.688c0-.508.39-.938.938-.938h3.124a.95.95 0 0 1 .938.938c0 .546-.43.937-.937.937h-3.125c-.547 0-.938-.39-.938-.937' })));
exports.StandalonePlaceholderBoldIcon = StandalonePlaceholderBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandalonePlaceholderBoldIcon);
exports.default = ForwardRef;
