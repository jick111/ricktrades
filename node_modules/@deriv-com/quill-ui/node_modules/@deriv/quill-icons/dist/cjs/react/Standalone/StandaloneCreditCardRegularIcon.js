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
exports.StandaloneCreditCardRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneCreditCardRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M7.75 9c-.703 0-1.25.586-1.25 1.25v1.25h20v-1.25c0-.664-.586-1.25-1.25-1.25zM6.5 12.75v2.5h20v-2.5zm0 3.75v6.25c0 .703.547 1.25 1.25 1.25h17.5c.664 0 1.25-.547 1.25-1.25V16.5zm-1.25-6.25c0-1.367 1.094-2.5 2.5-2.5h17.5c1.367 0 2.5 1.133 2.5 2.5v12.5c0 1.406-1.133 2.5-2.5 2.5H7.75a2.47 2.47 0 0 1-2.5-2.5zM9 20.875c0-.312.273-.625.625-.625h2.5c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-2.5A.617.617 0 0 1 9 20.875m5 0c0-.312.273-.625.625-.625h5c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-5a.617.617 0 0 1-.625-.625' })));
exports.StandaloneCreditCardRegularIcon = StandaloneCreditCardRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneCreditCardRegularIcon);
exports.default = ForwardRef;
