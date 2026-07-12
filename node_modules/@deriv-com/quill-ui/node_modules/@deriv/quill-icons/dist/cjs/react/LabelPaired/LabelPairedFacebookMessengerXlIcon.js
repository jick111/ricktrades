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
const LabelPairedFacebookMessengerXlIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M12 6.375c6.563 0 11.625 4.828 11.625 11.297 0 8.203-7.828 12.797-15 10.828-.422-.094-.469 0-2.906 1.078-.328.094-.657.094-.89-.094-.282-.14-.423-.422-.423-.75-.093-2.156 0-2.343-.375-2.718C1.734 24 .375 21.046.375 17.672.375 11.203 5.438 6.375 12 6.375m6.984 8.719c.328-.516-.28-1.125-.797-.75l-3.656 2.765c-.281.188-.61.188-.844 0l-2.718-2.015c-.422-.281-.89-.422-1.36-.328-.515.093-.937.375-1.171.797l-3.422 5.39c-.328.516.28 1.125.797.75l3.656-2.765c.281-.188.61-.188.844 0l2.718 2.015c.422.281.89.422 1.406.328.47-.093.891-.375 1.126-.797z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '325968191f8c2c3d315ffd0f6d486a13__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFacebookMessengerXlIcon);
exports.default = ForwardRef;
