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
const LabelPairedOneLgRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 10, height: 30, viewBox: '0 0 10 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M5.625 7.375V23h3.75c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H.625A.617.617 0 0 1 0 23.625C0 23.313.273 23 .625 23h3.75V8.547l-2.812 1.875c-.274.195-.665.117-.86-.195-.195-.274-.117-.665.195-.86l3.75-2.5a.7.7 0 0 1 .625-.039c.196.117.352.352.352.547' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'd183a650fb676e801709b26bb5384464__a' },
            React.createElement("path", { d: 'M0 0h10v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedOneLgRegularIcon);
exports.default = ForwardRef;
