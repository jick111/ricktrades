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
exports.StandaloneRightToBracketBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneRightToBracketBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'm13.5 20.797 4.297-4.297-4.297-4.258v2.07c0 .547-.43.938-.937.938H7.875v2.5h4.688a.95.95 0 0 1 .937.938zm6.25-4.297c0 .469-.195.898-.508 1.21l-4.531 4.532c-.352.352-.82.508-1.29.508a1.77 1.77 0 0 1-1.796-1.797v-1.328h-3.75A1.85 1.85 0 0 1 6 17.75v-2.5c0-1.016.82-1.875 1.875-1.875h3.75v-1.29c0-1.015.781-1.835 1.797-1.835.469 0 .937.195 1.289.547l4.531 4.531c.313.313.508.742.508 1.172m-.312 6.875h3.125c.859 0 1.562-.664 1.562-1.562V11.188c0-.86-.703-1.563-1.562-1.563h-3.125c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h3.125C24.438 7.75 26 9.313 26 11.188v10.625a3.443 3.443 0 0 1-3.437 3.437h-3.125c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938' })));
exports.StandaloneRightToBracketBoldIcon = StandaloneRightToBracketBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneRightToBracketBoldIcon);
exports.default = ForwardRef;
