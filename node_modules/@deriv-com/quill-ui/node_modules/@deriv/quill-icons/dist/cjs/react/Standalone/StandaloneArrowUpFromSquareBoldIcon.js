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
exports.StandaloneArrowUpFromSquareBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneArrowUpFromSquareBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M16.664 6.773 21 11.148c.39.391.39.977 0 1.329-.352.39-.937.39-1.328 0l-2.774-2.774v9.61c0 .546-.39.937-.937.937a.925.925 0 0 1-.938-.937v-9.61l-2.773 2.774a.856.856 0 0 1-1.29 0c-.39-.352-.39-.938 0-1.329l4.376-4.375c.351-.351.937-.351 1.328 0m-7.852.977h.313a.95.95 0 0 1 .938.938c0 .546-.43.937-.938.937h-.312a.925.925 0 0 0-.938.938v13.125c0 .546.39.937.938.937h14.375c.507 0 .937-.39.937-.937V10.563a.95.95 0 0 0-.937-.938h-.313c-.547 0-.937-.39-.937-.937 0-.508.39-.938.937-.938h.313C24.71 7.75 26 9.04 26 10.563v13.125a2.826 2.826 0 0 1-2.812 2.812H8.813A2.8 2.8 0 0 1 6 23.688V10.563A2.826 2.826 0 0 1 8.813 7.75' })));
exports.StandaloneArrowUpFromSquareBoldIcon = StandaloneArrowUpFromSquareBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneArrowUpFromSquareBoldIcon);
exports.default = ForwardRef;
