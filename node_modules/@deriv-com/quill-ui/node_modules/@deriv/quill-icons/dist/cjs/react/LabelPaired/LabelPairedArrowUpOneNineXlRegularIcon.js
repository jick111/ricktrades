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
const LabelPairedArrowUpOneNineXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 27, height: 36, viewBox: '0 0 27 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M21 8.25V15h1.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H18a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h1.5V9.328l-1.266.422c-.422.094-.843-.094-.984-.516a.78.78 0 0 1 .516-.937l2.25-.75c.187-.047.468-.047.656.094.187.14.328.375.328.609M8.016 7.734l4.5 4.5c.28.282.28.797 0 1.079-.282.28-.797.28-1.078 0L8.25 10.078V27.75c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V10.078l-3.234 3.235c-.282.28-.797.28-1.078 0-.282-.282-.282-.797 0-1.079l4.5-4.5c.28-.28.796-.28 1.078 0m12.047 16.641c.843 0 1.64-.422 2.109-1.219.422-.75.422-1.64 0-2.437-.469-.75-1.266-1.219-2.11-1.219-.89 0-1.687.469-2.156 1.219-.422.797-.422 1.687 0 2.437.469.797 1.266 1.219 2.157 1.219m-3.938-2.437A3.93 3.93 0 0 1 20.063 18C22.219 18 24 19.781 24 21.938c0 .093 0 .14-.047.187H24a4.09 4.09 0 0 1-1.031 2.719l-2.907 3.422c-.28.328-.75.328-1.078.093-.328-.28-.328-.75-.093-1.078l1.218-1.406h-.047a3.9 3.9 0 0 1-3.937-3.937' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'cec70bce2cbe43bc7c70ea008f5f0ec6__a' },
            React.createElement("path", { d: 'M0 0h27v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowUpOneNineXlRegularIcon);
exports.default = ForwardRef;
