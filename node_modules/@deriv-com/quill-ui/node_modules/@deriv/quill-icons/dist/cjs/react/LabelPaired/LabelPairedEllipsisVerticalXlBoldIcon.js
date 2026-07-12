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
const LabelPairedEllipsisVerticalXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 6, height: 36, viewBox: '0 0 6 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3 23.25c.797 0 1.5.469 1.922 1.125.422.703.422 1.594 0 2.25C4.5 27.328 3.797 27.75 3 27.75c-.844 0-1.547-.422-1.969-1.125-.422-.656-.422-1.547 0-2.25.422-.656 1.125-1.125 1.969-1.125m0-7.5c.797 0 1.5.469 1.922 1.125.422.703.422 1.594 0 2.25C4.5 19.828 3.797 20.25 3 20.25c-.844 0-1.547-.422-1.969-1.125-.422-.656-.422-1.547 0-2.25.422-.656 1.125-1.125 1.969-1.125m2.25-5.25c0 .844-.469 1.547-1.125 1.969-.703.422-1.594.422-2.25 0C1.172 12.047.75 11.344.75 10.5c0-.797.422-1.5 1.125-1.922.656-.422 1.547-.422 2.25 0C4.781 9 5.25 9.703 5.25 10.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'b18d2ad5a25701a1667a3f0cff9e694c__a' },
            React.createElement("path", { d: 'M0 0h6v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedEllipsisVerticalXlBoldIcon);
exports.default = ForwardRef;
