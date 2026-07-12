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
exports.StandaloneSignalBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneSignalBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M26 6.5a.95.95 0 0 1 .938.938v18.125c0 .546-.43.937-.938.937-.547 0-.937-.39-.937-.937V7.438c0-.508.39-.938.937-.938m-5 3.75a.95.95 0 0 1 .938.938v14.375c0 .546-.43.937-.938.937-.547 0-.937-.39-.937-.937V11.188c0-.508.39-.938.937-.938M16 14a.95.95 0 0 1 .938.938v10.625c0 .546-.43.937-.938.937-.547 0-.937-.39-.937-.937V14.938c0-.508.39-.938.937-.938m-5 3.75a.95.95 0 0 1 .938.938v6.875c0 .546-.43.937-.938.937-.547 0-.937-.39-.937-.937v-6.875c0-.508.39-.938.937-.938M6 21.5a.95.95 0 0 1 .938.938v3.125c0 .546-.43.937-.938.937-.547 0-.937-.39-.937-.937v-3.125c0-.508.39-.938.937-.938' })));
exports.StandaloneSignalBoldIcon = StandaloneSignalBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneSignalBoldIcon);
exports.default = ForwardRef;
