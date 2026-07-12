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
exports.StandaloneCircleUserSlashFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneCircleUserSlashFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M3.695 6.89c.313-.43.899-.507 1.29-.156l3.75 2.891A9.3 9.3 0 0 1 11 7.867c3.086-1.797 6.875-1.797 10 0 3.086 1.758 5 5.078 5 8.633a10.15 10.15 0 0 1-1.602 5.43l3.711 2.93c.43.312.508.898.157 1.288-.313.43-.899.508-1.29.157L3.853 8.18c-.43-.313-.508-.899-.157-1.29M6 16.5c0-1.29.234-2.54.703-3.71l7.89 6.25a4.98 4.98 0 0 0-4.218 2.5A7.59 7.59 0 0 0 15.961 24a7.4 7.4 0 0 0 3.71-.977l2.11 1.641c-.273.195-.547.352-.82.508-3.086 1.797-6.875 1.797-10 0C7.875 23.375 6 20.094 6 16.5m7.383-3.203 4.258 3.32a2.9 2.9 0 0 0 .78-.898c.509-.86.509-1.914 0-2.813a2.87 2.87 0 0 0-2.46-1.406c-.977 0-1.914.547-2.422 1.406a1.2 1.2 0 0 0-.156.39' })));
exports.StandaloneCircleUserSlashFillIcon = StandaloneCircleUserSlashFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneCircleUserSlashFillIcon);
exports.default = ForwardRef;
