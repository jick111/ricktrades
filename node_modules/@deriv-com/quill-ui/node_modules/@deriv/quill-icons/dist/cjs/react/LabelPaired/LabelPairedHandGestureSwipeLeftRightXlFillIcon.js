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
const LabelPairedHandGestureSwipeLeftRightXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 30, height: 36, viewBox: '0 0 30 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M15 10.828A1.16 1.16 0 0 1 16.172 12v4.36c.234-.235.562-.376.937-.376.75 0 1.36.563 1.407 1.313.234-.235.562-.375.937-.375.75 0 1.36.562 1.406 1.312.235-.234.563-.375.938-.375.75 0 1.406.657 1.406 1.407v2.812a3.76 3.76 0 0 1-3.75 3.75h-3.469a4.7 4.7 0 0 1-3-1.078l-.14-.14c-.89-.704-1.36-1.782-1.36-2.907v-1.078c0-.562.235-1.078.704-1.453l.562-.469c.047-.047.094-.094.188-.094v1.594c0 .281.187.469.468.469a.47.47 0 0 0 .469-.469V12c0-.656.469-1.172 1.172-1.172zm7.781 4.64 2.532-2.53c.28-.282.28-.704 0-.938L22.64 9.281a.78.78 0 0 0-.985 0 .78.78 0 0 0 0 .985l1.547 1.5h-4.547c-.375 0-.656.328-.656.703a.64.64 0 0 0 .656.656h4.547l-1.36 1.36a.68.68 0 0 0 0 .984c.282.234.704.234.938 0m-15.61 0-2.484-2.53c-.28-.282-.28-.704 0-.938L7.36 9.281c.282-.234.704-.234.938 0a.68.68 0 0 1 0 .985l-1.5 1.5h4.547c.375 0 .656.328.656.703a.64.64 0 0 1-.656.656H6.797l1.36 1.36a.78.78 0 0 1 0 .984.78.78 0 0 1-.985 0' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '9705a79317c623438f188c50b246281d__a' },
            React.createElement("path", { d: 'M0 0h30v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedHandGestureSwipeLeftRightXlFillIcon);
exports.default = ForwardRef;
