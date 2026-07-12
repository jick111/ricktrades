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
const LabelPairedAppStoreIosXlIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 21, height: 36, viewBox: '0 0 21 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M18.75 7.5C19.969 7.5 21 8.531 21 9.75v16.5a2.25 2.25 0 0 1-2.25 2.25H2.25A2.22 2.22 0 0 1 0 26.25V9.75A2.25 2.25 0 0 1 2.25 7.5zM5.953 24.047l.89-1.547c-.468-.61-1.124-.797-1.874-.562l-.657 1.171c-.28.422-.093 1.032.329 1.266a.934.934 0 0 0 1.312-.328m6.469-2.531c.422-.75-.094-1.875-1.031-1.875H8.484l3.985-6.985c.281-.422.14-.984-.328-1.265-.422-.235-1.032-.094-1.266.328l-.422.75-.422-.75c-.234-.422-.844-.563-1.265-.328-.47.28-.61.843-.375 1.265l.984 1.688-3.047 5.297h-2.39a.94.94 0 0 0-.938.937.94.94 0 0 0 .938.938zm4.64 0a.94.94 0 0 0 .938-.938.94.94 0 0 0-.937-.937h-2.438c-1.266-2.11-2.156-3.703-2.766-4.782-.562.47-1.125 1.829-.328 3.188.75 1.312 1.922 3.328 3.469 6a.91.91 0 0 0 1.266.328.91.91 0 0 0 .328-1.266l-.89-1.593z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '987b38dfabbf60ef2cb727a88fde8797__a' },
            React.createElement("path", { d: 'M0 0h21v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedAppStoreIosXlIcon);
exports.default = ForwardRef;
