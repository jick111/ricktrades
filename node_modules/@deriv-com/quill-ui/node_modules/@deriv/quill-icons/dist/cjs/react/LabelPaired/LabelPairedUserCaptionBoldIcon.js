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
const LabelPairedUserCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 11, height: 18, viewBox: '0 0 11 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M7.375 6.5c0-.656-.375-1.266-.937-1.617a1.91 1.91 0 0 0-1.875 0c-.586.351-.938.96-.938 1.617 0 .68.352 1.29.938 1.64.562.329 1.289.329 1.875 0 .562-.35.937-.96.937-1.64M2.5 6.5c0-1.055.563-2.04 1.5-2.578a2.99 2.99 0 0 1 3 0c.914.539 1.5 1.523 1.5 2.578A3.03 3.03 0 0 1 7 9.102c-.937.539-2.086.539-3 0A2.98 2.98 0 0 1 2.5 6.5m-1.102 7.875h8.18a3.06 3.06 0 0 0-3.023-2.625H4.422a3.06 3.06 0 0 0-3.024 2.625M.25 14.82a4.17 4.17 0 0 1 4.172-4.195h2.133a4.19 4.19 0 0 1 4.195 4.195c0 .375-.328.68-.703.68H.93a.68.68 0 0 1-.68-.68' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '2ab8d96c3dc5fc9f44a75e32a06f5535__a' },
            React.createElement("path", { d: 'M0 0h11v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedUserCaptionBoldIcon);
exports.default = ForwardRef;
