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
exports.StandaloneFourFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneFourFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'm15.883 9.547-4.18 8.828H18.5V12.75c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25v5.625h1.25c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25H21V24c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25v-3.125H9.75c-.43 0-.86-.195-1.094-.547-.195-.39-.234-.82-.039-1.21l5-10.626c.274-.625 1.016-.898 1.64-.625.626.313.9 1.055.626 1.68' })));
exports.StandaloneFourFillIcon = StandaloneFourFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneFourFillIcon);
exports.default = ForwardRef;
