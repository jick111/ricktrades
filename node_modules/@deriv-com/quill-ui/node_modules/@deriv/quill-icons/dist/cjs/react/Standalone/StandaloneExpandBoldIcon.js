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
exports.StandaloneExpandBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneExpandBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M12.563 7.75a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H9.125v3.438c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937V8.686c0-.507.39-.937.938-.937zM7.25 19.938c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938v3.437h3.438a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H8.186c-.546 0-.937-.39-.937-.937zM23.813 7.75a.95.95 0 0 1 .937.938v4.374c0 .547-.43.938-.937.938-.547 0-.938-.39-.938-.937V9.625h-3.437c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938zm-.938 12.188c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938v4.375c0 .546-.43.937-.937.937h-4.375c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h3.437z' })));
exports.StandaloneExpandBoldIcon = StandaloneExpandBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneExpandBoldIcon);
exports.default = ForwardRef;
