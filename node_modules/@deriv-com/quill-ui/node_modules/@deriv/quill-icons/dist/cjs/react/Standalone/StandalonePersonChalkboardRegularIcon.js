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
exports.StandalonePersonChalkboardRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandalonePersonChalkboardRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M10.063 8.688c0 .546.39.937.937.937.508 0 .938-.39.938-.937A.95.95 0 0 0 11 7.75a.925.925 0 0 0-.937.938m3.124 0a2.2 2.2 0 0 1-1.093 1.914c-.703.39-1.524.39-2.188 0-.703-.391-1.094-1.094-1.094-1.915 0-.78.391-1.484 1.094-1.874.664-.391 1.485-.391 2.188 0a2.18 2.18 0 0 1 1.094 1.875m-2.695 4.062c-.273 0-.508.078-.742.156V19h2.5v-6.25zM9.75 25.875a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V14.43l-1.953 3.633a.64.64 0 0 1-.86.273c-.312-.195-.43-.547-.273-.86L7.72 13.18a3.16 3.16 0 0 1 2.773-1.68H16V8.375c0-1.016.82-1.875 1.875-1.875h8.75c1.016 0 1.875.86 1.875 1.875v8.75c0 1.055-.86 1.875-1.875 1.875h-8.75A1.85 1.85 0 0 1 16 17.125V14h1.25v3.125c0 .352.273.625.625.625h8.75a.64.64 0 0 0 .625-.625v-8.75c0-.312-.312-.625-.625-.625h-8.75a.64.64 0 0 0-.625.625V11.5h1.875c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H13.5v13.125a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V20.25h-2.5z' })));
exports.StandalonePersonChalkboardRegularIcon = StandalonePersonChalkboardRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandalonePersonChalkboardRegularIcon);
exports.default = ForwardRef;
