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
exports.StandaloneRightFromBracketBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneRightFromBracketBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M19.75 12.242v2.07c0 .547-.43.938-.937.938h-4.688v2.5h4.688a.95.95 0 0 1 .937.938v2.109l4.297-4.297zM26 16.5c0 .469-.195.898-.508 1.21l-4.531 4.532c-.352.352-.82.508-1.29.508a1.77 1.77 0 0 1-1.796-1.797v-1.328h-3.75a1.85 1.85 0 0 1-1.875-1.875v-2.5c0-1.016.82-1.875 1.875-1.875h3.75v-1.29c0-1.015.781-1.835 1.797-1.835.469 0 .937.195 1.289.547l4.531 4.531c.313.313.508.742.508 1.172M12.563 9.625H9.437c-.898 0-1.562.703-1.562 1.563v10.625c0 .898.664 1.562 1.563 1.562h3.124a.95.95 0 0 1 .938.938c0 .546-.43.937-.937.937H9.437A3.42 3.42 0 0 1 6 21.813V11.188A3.443 3.443 0 0 1 9.438 7.75h3.124a.95.95 0 0 1 .938.938c0 .546-.43.937-.937.937' })));
exports.StandaloneRightFromBracketBoldIcon = StandaloneRightFromBracketBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneRightFromBracketBoldIcon);
exports.default = ForwardRef;
