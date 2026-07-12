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
exports.StandaloneWifiBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneWifiBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M5.023 13.766c-.39.351-.976.312-1.289-.079a.933.933 0 0 1 .079-1.328C7.055 9.508 11.313 7.75 16 7.75c4.648 0 8.906 1.758 12.148 4.61.391.35.43.937.118 1.328a.933.933 0 0 1-1.328.078A16.5 16.5 0 0 0 16 9.625a16.53 16.53 0 0 0-10.977 4.14M16 16.5c-2.54 0-4.844.977-6.562 2.578A.933.933 0 0 1 8.108 19a.97.97 0 0 1 .04-1.328c2.07-1.875 4.804-3.047 7.851-3.047 3.008 0 5.742 1.172 7.813 3.047.351.351.39.937.039 1.328a.933.933 0 0 1-1.329.078A9.56 9.56 0 0 0 16 16.5m2.188 6.563a2.2 2.2 0 0 1-1.094 1.914c-.703.39-1.524.39-2.188 0-.703-.391-1.094-1.094-1.094-1.915 0-.78.391-1.484 1.094-1.875.664-.39 1.485-.39 2.188 0a2.18 2.18 0 0 1 1.093 1.875' })));
exports.StandaloneWifiBoldIcon = StandaloneWifiBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneWifiBoldIcon);
exports.default = ForwardRef;
