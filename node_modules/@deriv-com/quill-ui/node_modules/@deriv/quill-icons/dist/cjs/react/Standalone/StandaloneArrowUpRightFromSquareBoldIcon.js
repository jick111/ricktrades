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
exports.StandaloneArrowUpRightFromSquareBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneArrowUpRightFromSquareBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M17.875 7.438c0-.508.39-.938.938-.938h6.21c.547 0 .938.43.938.938v6.25c0 .546-.39.937-.938.937a.925.925 0 0 1-.937-.937V9.703l-8.711 8.711a.856.856 0 0 1-1.29 0c-.39-.352-.39-.937 0-1.328l8.712-8.711h-3.985c-.546 0-.937-.39-.937-.937m-9.062.312h5a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937h-5a.925.925 0 0 0-.938.938v13.125c0 .546.39.937.938.937h13.125c.507 0 .937-.39.937-.937v-5c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938v5a2.826 2.826 0 0 1-2.812 2.812H8.813A2.8 2.8 0 0 1 6 23.688V10.563A2.826 2.826 0 0 1 8.813 7.75' })));
exports.StandaloneArrowUpRightFromSquareBoldIcon = StandaloneArrowUpRightFromSquareBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneArrowUpRightFromSquareBoldIcon);
exports.default = ForwardRef;
