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
exports.StandaloneLanguageFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneLanguageFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M3.5 11.5C3.5 10.133 4.594 9 6 9h20c1.367 0 2.5 1.133 2.5 2.5v10c0 1.406-1.133 2.5-2.5 2.5H6a2.47 2.47 0 0 1-2.5-2.5zm12.5 0v10h10v-10zm-5.547 1.875a.82.82 0 0 0-.703-.469c-.312 0-.625.196-.742.469L6.508 19c-.156.39 0 .86.39 1.055.43.156.86 0 1.055-.39l.352-.821h2.851l.352.82c.195.39.664.547 1.055.39.39-.195.546-.663.39-1.054zm-.703 2.266.742 1.64H9.008zM21 12.906c.43 0 .781.352.781.781v.157h2.344c.43 0 .781.351.781.781s-.351.781-.781.781h-.078l-.078.196c-.352.937-.86 1.835-1.563 2.539.04.039.078.039.117.078l.743.43a.85.85 0 0 1 .273 1.093.85.85 0 0 1-1.094.274l-.703-.47c-.195-.077-.351-.194-.547-.312-.39.274-.82.547-1.328.743l-.117.078c-.39.156-.86 0-1.055-.39a.84.84 0 0 1 .43-1.056l.117-.039c.274-.117.508-.273.742-.39l-.468-.47a.8.8 0 0 1 0-1.132c.273-.312.78-.312 1.093 0l.547.586h.04a6.9 6.9 0 0 0 1.171-1.758h-4.179a.784.784 0 0 1-.782-.781c0-.43.352-.781.782-.781h2.03v-.156c0-.43.352-.782.782-.782' })));
exports.StandaloneLanguageFillIcon = StandaloneLanguageFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneLanguageFillIcon);
exports.default = ForwardRef;
