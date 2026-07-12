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
exports.StandalonePenCircleRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandalonePenCircleRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M24.75 16.5c0-3.125-1.68-5.977-4.375-7.54-2.734-1.6-6.055-1.6-8.75 0A8.63 8.63 0 0 0 7.25 16.5c0 3.164 1.64 6.016 4.375 7.578 2.695 1.602 6.016 1.602 8.75 0A8.73 8.73 0 0 0 24.75 16.5M6 16.5a9.93 9.93 0 0 1 5-8.633c3.086-1.797 6.875-1.797 10 0 3.086 1.797 5 5.078 5 8.633 0 3.594-1.914 6.875-5 8.672-3.125 1.797-6.914 1.797-10 0-3.125-1.797-5-5.078-5-8.672m12.93-3.594c-.235-.234-.625-.234-.899 0l-.82.82 1.562 1.563.82-.82a.595.595 0 0 0 0-.899zm-5.82 4.922c-.079.078-.118.195-.157.313l-.469 1.914 1.914-.508c.079 0 .196-.078.274-.156l3.203-3.203-1.562-1.563zm4.062-5.82a1.863 1.863 0 0 1 2.656 0l.664.703a1.816 1.816 0 0 1 0 2.617L15.57 20.29c-.273.234-.547.39-.898.469l-2.93.742c-.195.04-.43 0-.586-.156-.156-.157-.195-.39-.156-.586l.742-2.93c.078-.351.235-.625.469-.898z' })));
exports.StandalonePenCircleRegularIcon = StandalonePenCircleRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandalonePenCircleRegularIcon);
exports.default = ForwardRef;
