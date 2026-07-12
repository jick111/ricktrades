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
const LabelPairedBellSlashSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 22, viewBox: '0 0 18 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.29 3.914 5.335 7.06c.629-.957 1.613-1.668 2.789-1.887v-.547c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875v.547c1.996.383 3.5 2.16 3.5 4.266v.71c0 1.23.41 2.434 1.176 3.418l.41.493c.137.191.191.437.11.629l2.406 1.914c.3.218.355.628.109.902a.604.604 0 0 1-.902.11L.496 4.925a.604.604 0 0 1-.11-.903.604.604 0 0 1 .903-.109M6.374 7.88l6.18 4.84a6.7 6.7 0 0 1-.492-2.57v-.711c0-1.668-1.395-3.063-3.063-3.063a3.02 3.02 0 0 0-2.625 1.504m4.977 7.246h-7.82a.65.65 0 0 1-.602-.355.68.68 0 0 1 .082-.711l.41-.493c.765-.984 1.203-2.187 1.203-3.418v-.3l1.258.984a6.7 6.7 0 0 1-1.04 2.98h4.84zM10.75 16c0 .465-.191.93-.52 1.258A1.71 1.71 0 0 1 9 17.75c-.465 0-.93-.164-1.258-.492S7.25 16.465 7.25 16h3.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '043b4ab9c8abe449e99f93e3dc7bea94__a' },
            React.createElement("path", { d: 'M0 0h18v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedBellSlashSmBoldIcon);
exports.default = ForwardRef;
