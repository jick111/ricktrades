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
exports.StandalonePhoneFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandalonePhoneFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'm12.406 7.477 1.563 3.75c.273.625.117 1.367-.43 1.796l-1.914 1.602a13.12 13.12 0 0 0 6.25 6.25l1.602-1.914c.43-.547 1.171-.703 1.796-.43l3.75 1.563c.743.273 1.094 1.093.899 1.836l-.938 3.437c-.195.664-.78 1.133-1.484 1.133C13.813 26.5 6 18.688 6 9c0-.703.469-1.29 1.133-1.484l3.437-.938c.742-.195 1.563.156 1.836.899' })));
exports.StandalonePhoneFillIcon = StandalonePhoneFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandalonePhoneFillIcon);
exports.default = ForwardRef;
