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
const LabelPairedSquareListLgRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 30, viewBox: '0 0 18 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.75 8c-.703 0-1.25.586-1.25 1.25v12.5c0 .703.547 1.25 1.25 1.25h12.5c.664 0 1.25-.547 1.25-1.25V9.25c0-.664-.586-1.25-1.25-1.25zM.25 9.25c0-1.367 1.094-2.5 2.5-2.5h12.5c1.367 0 2.5 1.133 2.5 2.5v12.5c0 1.406-1.133 2.5-2.5 2.5H2.75a2.47 2.47 0 0 1-2.5-2.5zm4.063 2.5c0-.508.39-.937.937-.937a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938-.547 0-.937-.391-.937-.938m3.437 0c0-.312.273-.625.625-.625h5c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-5a.617.617 0 0 1-.625-.625m0 3.75c0-.312.273-.625.625-.625h5c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-5a.617.617 0 0 1-.625-.625m0 3.75c0-.312.273-.625.625-.625h5c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-5a.617.617 0 0 1-.625-.625m-2.5-2.812c-.547 0-.937-.391-.937-.938 0-.508.39-.937.937-.937a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938m-.937 2.812c0-.508.39-.937.937-.937a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938-.547 0-.937-.391-.937-.938' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '22e570d44f5afdcdfc25645db709b621__a' },
            React.createElement("path", { d: 'M0 0h18v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedSquareListLgRegularIcon);
exports.default = ForwardRef;
