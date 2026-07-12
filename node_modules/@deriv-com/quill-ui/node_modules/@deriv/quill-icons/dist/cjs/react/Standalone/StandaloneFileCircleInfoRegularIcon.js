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
exports.StandaloneFileCircleInfoRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneFileCircleInfoRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M7.25 25.25h9.063c.39.469.82.898 1.289 1.25H7.25a2.47 2.47 0 0 1-2.5-2.5V9c0-1.367 1.094-2.5 2.5-2.5h6.094c.469 0 .976.234 1.328.586l4.492 4.492c.352.352.586.86.586 1.328v1.367c-.469.118-.86.274-1.25.508V14h-4.375a1.85 1.85 0 0 1-1.875-1.875V7.75h-5C6.547 7.75 6 8.336 6 9v15c0 .703.547 1.25 1.25 1.25m11.21-12.5c-.038-.078-.077-.195-.155-.273l-4.532-4.532c-.078-.078-.195-.117-.273-.156v4.336c0 .352.273.625.625.625zM26 20.875c0-1.562-.86-2.969-2.187-3.75-1.368-.82-3.047-.82-4.375 0a4.29 4.29 0 0 0-2.188 3.75c0 1.602.82 3.008 2.188 3.79 1.328.82 3.007.82 4.375 0C25.14 23.882 26 22.476 26 20.874m-10 0a5.58 5.58 0 0 1 2.813-4.844c1.718-1.015 3.867-1.015 5.625 0 1.718 1.016 2.812 2.852 2.812 4.844 0 2.031-1.094 3.867-2.812 4.883-1.758 1.015-3.907 1.015-5.625 0A5.6 5.6 0 0 1 16 20.875m5.625-1.25c-.547 0-.937-.39-.937-.937 0-.508.39-.938.937-.938a.95.95 0 0 1 .938.938c0 .546-.43.937-.938.937m-1.25 3.75c0-.312.273-.625.625-.625V21.5a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h.625c.313 0 .625.313.625.625v1.875c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H21a.617.617 0 0 1-.625-.625' })));
exports.StandaloneFileCircleInfoRegularIcon = StandaloneFileCircleInfoRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneFileCircleInfoRegularIcon);
exports.default = ForwardRef;
