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
const LabelPairedDerivLgIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 25, height: 30, viewBox: '0 0 25 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm16.563 6.164 3.906-.664-2.735 15.625C17.304 23.547 15 25.5 12.54 25.5H9.57c-3.36 0-5.586-2.695-5-6.016l.274-1.445c.586-3.32 3.75-6.055 7.11-6.055h3.554zm-2.54 14.414.86-5h-3.125c-1.524 0-2.93 1.25-3.203 2.735l-.157.898c-.273 1.484.743 2.695 2.227 2.695h1.836c.742 0 1.406-.586 1.562-1.328' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '76402a93295f085ddad2669b22161b6d__a' },
            React.createElement("path", { d: 'M0 0h25v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedDerivLgIcon);
exports.default = ForwardRef;
