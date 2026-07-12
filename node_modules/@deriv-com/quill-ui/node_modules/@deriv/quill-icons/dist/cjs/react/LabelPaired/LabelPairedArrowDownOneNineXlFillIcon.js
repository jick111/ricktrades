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
const LabelPairedArrowDownOneNineXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 27, height: 36, viewBox: '0 0 27 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M21.094 7.781c.422.328.656.75.656 1.219v4.5h.75c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5H18a1.48 1.48 0 0 1-1.5-1.5c0-.797.656-1.5 1.5-1.5h.75v-2.39l-.281.093c-.797.235-1.64-.187-1.922-.937-.235-.797.187-1.641.937-1.922l2.25-.75c.47-.14.985-.094 1.36.187M7.5 28.5c-.422 0-.844-.14-1.125-.469l-4.125-4.5a1.487 1.487 0 0 1 .094-2.11 1.487 1.487 0 0 1 2.11.095L6 23.156V9c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5v14.156l1.5-1.64c.563-.61 1.5-.657 2.11-.094.609.562.656 1.5.093 2.11l-4.125 4.5c-.281.327-.656.468-1.078.468m12.094-8.11c-.75.376-1.078 1.266-.703 2.016a1.44 1.44 0 0 0 1.968.703 1.44 1.44 0 0 0 .703-1.968c-.328-.75-1.218-1.078-1.968-.75m-.61 5.297a4.04 4.04 0 0 1-2.859-3.89 4.1 4.1 0 0 1 4.125-4.125 4.13 4.13 0 0 1 4.125 4.125c0 1.078-.375 2.156-1.031 3.047l-2.297 3.093a1.44 1.44 0 0 1-2.063.282c-.703-.469-.843-1.407-.328-2.11z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '4bf2cba12a50badad88c702807432afb__a' },
            React.createElement("path", { d: 'M0 0h27v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowDownOneNineXlFillIcon);
exports.default = ForwardRef;
