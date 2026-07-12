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
exports.StandaloneQrcodeRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneQrcodeRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M12.875 9h-3.75a.64.64 0 0 0-.625.625v3.75c0 .352.273.625.625.625h3.75a.64.64 0 0 0 .625-.625v-3.75c0-.312-.312-.625-.625-.625m-3.75-1.25h3.75c1.016 0 1.875.86 1.875 1.875v3.75c0 1.055-.86 1.875-1.875 1.875h-3.75a1.85 1.85 0 0 1-1.875-1.875v-3.75c0-1.016.82-1.875 1.875-1.875M12.875 19h-3.75a.64.64 0 0 0-.625.625v3.75c0 .352.273.625.625.625h3.75a.64.64 0 0 0 .625-.625v-3.75c0-.312-.312-.625-.625-.625m-3.75-1.25h3.75c1.016 0 1.875.86 1.875 1.875v3.75c0 1.055-.86 1.875-1.875 1.875h-3.75a1.85 1.85 0 0 1-1.875-1.875v-3.75c0-1.016.82-1.875 1.875-1.875m10-8.75a.64.64 0 0 0-.625.625v3.75c0 .352.273.625.625.625h3.75a.64.64 0 0 0 .625-.625v-3.75c0-.312-.312-.625-.625-.625zm-1.875.625c0-1.016.82-1.875 1.875-1.875h3.75c1.016 0 1.875.86 1.875 1.875v3.75c0 1.055-.86 1.875-1.875 1.875h-3.75a1.85 1.85 0 0 1-1.875-1.875zm0 8.75c0-.312.273-.625.625-.625h2.5c.313 0 .625.313.625.625v2.656h2.5v-2.656c0-.312.273-.625.625-.625.313 0 .625.313.625.625v3.281a.64.64 0 0 1-.625.625h-3.75a.617.617 0 0 1-.625-.625V19H18.5v5.938a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625zm-6.562-7.812h.624c.313 0 .626.312.626.624v.626a.64.64 0 0 1-.626.624h-.624a.617.617 0 0 1-.626-.624v-.626c0-.312.274-.624.626-.624m-.626 10.625c0-.313.274-.625.626-.625h.624c.313 0 .626.312.626.625v.625a.64.64 0 0 1-.626.625h-.624a.617.617 0 0 1-.626-.625zm10.626-10.625h.625c.312 0 .625.312.625.624v.626a.64.64 0 0 1-.625.624h-.625a.617.617 0 0 1-.625-.624v-.626c0-.312.273-.624.625-.624M19.75 24c0-.312.273-.625.625-.625H21c.313 0 .625.313.625.625v.625a.64.64 0 0 1-.625.625h-.625a.617.617 0 0 1-.625-.625zm3.75-.625h.625c.313 0 .625.313.625.625v.625a.64.64 0 0 1-.625.625H23.5a.617.617 0 0 1-.625-.625V24c0-.312.273-.625.625-.625' })));
exports.StandaloneQrcodeRegularIcon = StandaloneQrcodeRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneQrcodeRegularIcon);
exports.default = ForwardRef;
