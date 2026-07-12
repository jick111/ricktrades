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
const React = __importStar(require("react"));
const react_1 = require("react");
const LabelPairedCircleUserSlashCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 18, viewBox: '0 0 15 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.117 3.734a.518.518 0 0 1 .774-.093l2.25 1.734A6.02 6.02 0 0 1 7.5 3.5a5.98 5.98 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6c-.047.094-.094.164-.14.258l2.226 1.758c.257.187.304.539.093.773a.518.518 0 0 1-.773.094L.21 4.508a.518.518 0 0 1-.094-.774m1.805 3.54.937.75A4.4 4.4 0 0 0 2.625 9.5c0 1.313.492 2.508 1.336 3.375a2.97 2.97 0 0 1 2.695-1.852l1.43 1.102H6.75c-.914 0-1.687.656-1.852 1.523.75.47 1.641.727 2.602.727.914 0 1.781-.258 2.531-.703l.938.726A6.04 6.04 0 0 1 7.5 15.5a5.97 5.97 0 0 1-5.203-3c-.938-1.594-1.055-3.516-.375-5.227m2.11-1.196L5.624 7.32c.164-.375.469-.68.844-.914a2.15 2.15 0 0 1 2.062 0 2.09 2.09 0 0 1 1.031 1.782c0 .632-.304 1.242-.773 1.617l2.86 2.25c.445-.75.726-1.617.726-2.555 0-2.672-2.203-4.875-4.875-4.875-1.36 0-2.602.563-3.469 1.453m2.53 1.992 1.266 1.008a1 1 0 0 0 .469-.398.95.95 0 0 0 0-.938.89.89 0 0 0-.797-.469c-.352 0-.656.165-.82.47-.07.093-.094.21-.117.327' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'ed9e51c6526a6f1b3c93905a0eb5e27d__a' },
            React.createElement("path", { d: 'M0 0h15v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCircleUserSlashCaptionBoldIcon);
exports.default = ForwardRef;
