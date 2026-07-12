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
exports.StandaloneClapperboardPlayFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneClapperboardPlayFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'm23.695 7.79-4.922 4.92-.039.04h-3.632l5-4.96.039-.04H23.5c.078 0 .117.04.195.04m-2.343 4.96 4.101-4.062c.313.43.547.976.547 1.562v2.5zm-7.5-5h3.632l-4.96 4.96-.04.04H8.852l5-4.96.039-.04zm-2.618 0-4.96 4.96-.04.04H6v-2.5c0-1.367 1.094-2.5 2.5-2.5zM6 14h20v8.75c0 1.406-1.133 2.5-2.5 2.5h-15a2.47 2.47 0 0 1-2.5-2.5zm8.438 2.578a.67.67 0 0 0-.313.547v5c0 .234.117.469.313.586.195.078.468.078.624-.04l3.75-2.5a.62.62 0 0 0 .313-.546.61.61 0 0 0-.312-.508l-3.75-2.5c-.157-.117-.43-.117-.626-.039' })));
exports.StandaloneClapperboardPlayFillIcon = StandaloneClapperboardPlayFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneClapperboardPlayFillIcon);
exports.default = ForwardRef;
