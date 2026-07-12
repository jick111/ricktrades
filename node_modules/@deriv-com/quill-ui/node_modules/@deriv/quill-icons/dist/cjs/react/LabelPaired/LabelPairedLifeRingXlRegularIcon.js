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
const LabelPairedLifeRingXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm18.844 25.969-4.266-4.266c-.75.516-1.64.797-2.578.797a4.57 4.57 0 0 1-2.625-.797L5.109 25.97C6.938 27.562 9.33 28.5 12 28.5c2.625 0 5.016-.937 6.844-2.531m1.078-1.078A10.42 10.42 0 0 0 22.5 18c0-2.625-.984-5.016-2.578-6.844l-4.266 4.266c.516.75.844 1.64.844 2.578 0 .984-.328 1.875-.844 2.625zM21 25.969l.516.515c.28.282.28.797 0 1.078-.282.282-.797.282-1.078 0L19.922 27c-2.11 1.875-4.875 3-7.922 3s-5.86-1.125-7.969-3l-.515.563c-.282.28-.797.28-1.078 0-.282-.282-.282-.797 0-1.079L3 25.97C1.125 23.859 0 21.047 0 18c0-3 1.125-5.812 3-7.922l-.562-.515c-.282-.282-.282-.797 0-1.079.28-.28.796-.28 1.078 0L4.03 9C6.141 7.172 8.953 6 12 6c3 0 5.813 1.172 7.922 3l.515-.516c.282-.28.797-.28 1.079 0 .28.282.28.797 0 1.079l-.516.515c1.828 2.11 3 4.875 3 7.922s-1.172 5.86-3 7.969m-2.156-15.89A10.4 10.4 0 0 0 12 7.5c-2.672 0-5.062.984-6.89 2.578l4.265 4.266c.75-.516 1.64-.844 2.625-.844.938 0 1.828.328 2.578.844zM8.297 20.624A4.57 4.57 0 0 1 7.5 18c0-.937.281-1.828.797-2.578L4.03 11.156C2.438 12.984 1.5 15.375 1.5 18c0 2.672.938 5.063 2.531 6.89zM9 18c0 1.078.563 2.063 1.5 2.625.89.516 2.063.516 3 0 .89-.562 1.5-1.547 1.5-2.625 0-1.031-.61-2.016-1.5-2.578-.937-.516-2.11-.516-3 0C9.563 15.984 9 16.969 9 18' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'd7edaad397dd3fcd918d7226c32fca1e__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedLifeRingXlRegularIcon);
exports.default = ForwardRef;
