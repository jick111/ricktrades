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
const LabelPairedMessagesQuestionLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 25, height: 30, viewBox: '0 0 25 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 8c0-1.367 1.094-2.5 2.5-2.5h11.25c1.367 0 2.5 1.133 2.5 2.5v7.5c0 1.406-1.133 2.5-2.5 2.5H7.89l-3.163 2.383c-.196.156-.43.156-.665.078-.195-.117-.312-.313-.312-.586V18H2.5A2.47 2.47 0 0 1 0 15.5zm10 11.25h3.75c2.07 0 3.75-1.68 3.75-3.75v-5h5c1.367 0 2.5 1.133 2.5 2.5v7.5c0 1.406-1.133 2.5-2.5 2.5h-1.25v1.875c0 .273-.156.469-.352.586-.234.078-.468.078-.664-.078L17.07 23H12.5a2.47 2.47 0 0 1-2.5-2.5zM5.313 9.133l-.04.039c-.117.39.079.86.508.976.39.157.82-.039.977-.468v-.04c.039-.117.156-.156.273-.156h1.875c.274 0 .508.196.508.47a.53.53 0 0 1-.234.429l-1.446.86c-.273.116-.39.39-.39.663v.43c0 .43.351.781.781.781.39 0 .742-.351.781-.781l1.016-.586c.664-.352 1.055-1.055 1.055-1.797 0-1.133-.938-2.031-2.07-2.031H7.03c-.781 0-1.484.469-1.718 1.21m3.828 6.055c.039-.352-.157-.743-.508-.938a1.02 1.02 0 0 0-1.055 0c-.351.195-.547.586-.508.938-.039.39.157.78.508.976.313.195.742.195 1.055 0 .351-.195.547-.586.508-.977' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '2701a75d49f9e3918ee171b6d1b279bf__a' },
            React.createElement("path", { d: 'M0 0h25v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMessagesQuestionLgFillIcon);
exports.default = ForwardRef;
