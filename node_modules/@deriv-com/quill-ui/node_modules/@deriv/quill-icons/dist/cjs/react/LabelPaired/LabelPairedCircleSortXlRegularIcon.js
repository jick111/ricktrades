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
const LabelPairedCircleSortXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M22.5 18c0-3.75-2.016-7.172-5.25-9.047-3.281-1.922-7.266-1.922-10.5 0A10.36 10.36 0 0 0 1.5 18c0 3.797 1.969 7.219 5.25 9.094 3.234 1.922 7.219 1.922 10.5 0A10.48 10.48 0 0 0 22.5 18M0 18A11.91 11.91 0 0 1 6 7.64c3.703-2.156 8.25-2.156 12 0 3.703 2.157 6 6.094 6 10.36 0 4.313-2.297 8.25-6 10.406-3.75 2.157-8.297 2.157-12 0C2.25 26.25 0 22.313 0 18m11.438-7.266c.28-.28.796-.28 1.078 0l4.5 4.5c.187.235.28.563.14.844-.093.235-.375.422-.656.422h-9c-.328 0-.61-.14-.703-.422-.14-.281-.047-.61.14-.844zM9.28 15h5.39L12 12.328zm-2.344 5.813c-.187-.235-.28-.563-.14-.844.094-.282.375-.469.703-.469h9c.281 0 .563.188.656.469.14.281.047.61-.14.843l-4.5 4.5c-.282.282-.797.282-1.078 0zM12 23.719 14.672 21h-5.39z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '1c497999c68a44b6c4ea1fd5cacb54e0__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCircleSortXlRegularIcon);
exports.default = ForwardRef;
