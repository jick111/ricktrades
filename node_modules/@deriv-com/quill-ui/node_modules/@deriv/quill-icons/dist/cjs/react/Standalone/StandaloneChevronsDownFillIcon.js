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
exports.StandaloneChevronsDownFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneChevronsDownFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M16.86 24.898a1.205 1.205 0 0 1-1.758 0l-7.5-7.5a1.205 1.205 0 0 1 0-1.757 1.205 1.205 0 0 1 1.757 0L16 22.242l6.602-6.601a1.205 1.205 0 0 1 1.757 0c.508.468.508 1.289 0 1.757zm7.5-15-7.5 7.5a1.205 1.205 0 0 1-1.758 0l-7.5-7.5a1.205 1.205 0 0 1 0-1.757 1.205 1.205 0 0 1 1.757 0L16 14.742l6.602-6.601a1.205 1.205 0 0 1 1.757 0c.508.468.508 1.289 0 1.757' })));
exports.StandaloneChevronsDownFillIcon = StandaloneChevronsDownFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneChevronsDownFillIcon);
exports.default = ForwardRef;
