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
exports.StandaloneHouseBlankBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneHouseBlankBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'm16.586 6.734 10.312 8.75c.391.352.43.938.118 1.329a.974.974 0 0 1-1.328.117l-.938-.82v7.265a3.11 3.11 0 0 1-3.125 3.125h-11.25c-1.758 0-3.125-1.367-3.125-3.125v-7.266l-.977.82a.974.974 0 0 1-1.328-.116.974.974 0 0 1 .117-1.329l10.313-8.75a.996.996 0 0 1 1.21 0m6.289 7.774L16 8.688l-6.875 5.82v8.867c0 .703.547 1.25 1.25 1.25h11.25c.664 0 1.25-.547 1.25-1.25z' })));
exports.StandaloneHouseBlankBoldIcon = StandaloneHouseBlankBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneHouseBlankBoldIcon);
exports.default = ForwardRef;
