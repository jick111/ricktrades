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
exports.StandaloneMicrophoneFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneMicrophoneFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M16 6.5c2.07 0 3.75 1.68 3.75 3.75v6.25a3.751 3.751 0 0 1-7.5 0v-6.25c0-2.07 1.68-3.75 3.75-3.75m-5 8.438V16.5c0 2.773 2.227 5 5 5 2.734 0 5-2.227 5-5v-1.562c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938V16.5c0 3.516-2.617 6.367-5.937 6.836v1.289h1.875a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937h-5.625c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h1.874v-1.29A6.88 6.88 0 0 1 9.125 16.5v-1.562c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938' })));
exports.StandaloneMicrophoneFillIcon = StandaloneMicrophoneFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneMicrophoneFillIcon);
exports.default = ForwardRef;
