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
const LabelPairedEllipsisLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 30, viewBox: '0 0 18 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.563 15.5c0-.781.39-1.484 1.093-1.875.664-.39 1.485-.39 2.188 0A2.18 2.18 0 0 1 4.938 15.5a2.2 2.2 0 0 1-1.094 1.914c-.703.39-1.524.39-2.188 0C.953 17.024.563 16.32.563 15.5m6.25 0c0-.781.39-1.484 1.093-1.875.664-.39 1.485-.39 2.188 0a2.18 2.18 0 0 1 1.094 1.875 2.2 2.2 0 0 1-1.094 1.914c-.703.39-1.524.39-2.188 0-.703-.39-1.093-1.094-1.093-1.914m8.437-2.187c.781 0 1.484.43 1.875 1.093.39.703.39 1.524 0 2.188a2.1 2.1 0 0 1-1.875 1.093c-.82 0-1.523-.39-1.914-1.093-.39-.664-.39-1.485 0-2.188a2.2 2.2 0 0 1 1.914-1.094' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'c4c7aac1fec13456a0c04836fff6b2d5__a' },
            React.createElement("path", { d: 'M0 0h18v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedEllipsisLgFillIcon);
exports.default = ForwardRef;
