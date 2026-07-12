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
exports.StandaloneLaptopRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneLaptopRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M23.5 9h-15c-.703 0-1.25.586-1.25 1.25v10H6v-10c0-1.367 1.094-2.5 2.5-2.5h15c1.367 0 2.5 1.133 2.5 2.5v10h-1.25v-10c0-.664-.586-1.25-1.25-1.25M6.469 24h19.023c.781 0 1.445-.508 1.68-1.25H4.789c.234.742.899 1.25 1.68 1.25M3.5 22.281c0-.43.313-.781.742-.781H27.72c.43 0 .781.352.781.781 0 1.64-1.367 2.969-3.008 2.969H6.47A2.967 2.967 0 0 1 3.5 22.281' })));
exports.StandaloneLaptopRegularIcon = StandaloneLaptopRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneLaptopRegularIcon);
exports.default = ForwardRef;
