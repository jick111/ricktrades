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
const LabelPairedPenLineLgBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 23, height: 30, viewBox: '0 0 23 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm.758 22.648.898-3.046a3.4 3.4 0 0 1 .86-1.446L14.39 6.281a2.523 2.523 0 0 1 3.554 0l1.524 1.524c.117.117.234.273.312.39a2.49 2.49 0 0 1-.312 3.164L7.594 23.234c-.04.04-.117.078-.157.157a4.2 4.2 0 0 1-1.289.703l-3.046.898-1.68.469a.8.8 0 0 1-.899-.234.8.8 0 0 1-.234-.899zm2.422-1.601-.625 2.148 2.148-.625.899-.273c.273-.078.468-.195.664-.39l8.945-8.946-2.422-2.422-8.945 8.945c-.04 0-.04.04-.078.078-.157.157-.235.352-.313.586zm6.758 2.578h11.875a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H9.938c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'b2bce1729034b489dd14c47ed725910f__a' },
            React.createElement("path", { d: 'M0 0h23v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPenLineLgBoldIcon);
exports.default = ForwardRef;
