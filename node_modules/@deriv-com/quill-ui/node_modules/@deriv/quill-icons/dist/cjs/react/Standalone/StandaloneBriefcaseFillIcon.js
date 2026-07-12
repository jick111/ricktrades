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
exports.StandaloneBriefcaseFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneBriefcaseFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M13.188 8.375a.31.31 0 0 0-.313.313v1.562h6.25V8.688a.336.336 0 0 0-.312-.313zM11 8.688c0-1.172.977-2.188 2.188-2.188h5.624C19.985 6.5 21 7.516 21 8.688v1.562h2.5c1.367 0 2.5 1.133 2.5 2.5v3.75H6v-3.75c0-1.367 1.094-2.5 2.5-2.5H11zm15 9.062v5c0 1.406-1.133 2.5-2.5 2.5h-15a2.47 2.47 0 0 1-2.5-2.5v-5h7.5V19c0 .703.547 1.25 1.25 1.25h2.5c.664 0 1.25-.547 1.25-1.25v-1.25z' })));
exports.StandaloneBriefcaseFillIcon = StandaloneBriefcaseFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneBriefcaseFillIcon);
exports.default = ForwardRef;
