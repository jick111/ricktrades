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
exports.StandalonePaperPlaneTopBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandalonePaperPlaneTopBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M11.195 15.563h9.766L8.539 10.25zm0 1.874L8.54 22.79l12.422-5.352zM7.72 7.868l17.5 7.5c.468.195.781.664.781 1.172 0 .469-.312.938-.781 1.133l-17.5 7.5a1.27 1.27 0 0 1-1.407-.313c-.351-.351-.43-.937-.195-1.406L9.594 16.5 6.117 9.586a1.31 1.31 0 0 1 .196-1.445 1.33 1.33 0 0 1 1.406-.274' })));
exports.StandalonePaperPlaneTopBoldIcon = StandalonePaperPlaneTopBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandalonePaperPlaneTopBoldIcon);
exports.default = ForwardRef;
