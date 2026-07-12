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
exports.StandaloneRightFromBracketFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneRightFromBracketFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'm20.727 10.64 4.804 4.805c.274.274.469.664.469 1.055 0 .43-.195.82-.469 1.094l-4.804 4.804c-.235.235-.586.352-.938.352a1.3 1.3 0 0 1-1.289-1.29V19h-5c-.703 0-1.25-.547-1.25-1.25v-2.5c0-.664.547-1.25 1.25-1.25h5v-2.422c0-.703.586-1.328 1.29-1.328.35 0 .702.156.937.39m-8.477-.39h-2.5c-.703 0-1.25.586-1.25 1.25v10c0 .703.547 1.25 1.25 1.25h2.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-2.5C7.68 25.25 6 23.57 6 21.5v-10c0-2.07 1.68-3.75 3.75-3.75h2.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25' })));
exports.StandaloneRightFromBracketFillIcon = StandaloneRightFromBracketFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneRightFromBracketFillIcon);
exports.default = ForwardRef;
