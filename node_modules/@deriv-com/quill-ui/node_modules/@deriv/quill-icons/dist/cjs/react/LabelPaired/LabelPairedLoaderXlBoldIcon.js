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
const LabelPairedLoaderXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M13.125 7.125v3.75A1.11 1.11 0 0 1 12 12c-.656 0-1.125-.469-1.125-1.125v-3.75C10.875 6.515 11.344 6 12 6c.61 0 1.125.516 1.125 1.125m0 18v3.75A1.11 1.11 0 0 1 12 30c-.656 0-1.125-.469-1.125-1.125v-3.75c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125M0 18c0-.61.469-1.125 1.125-1.125h3.75C5.485 16.875 6 17.391 6 18a1.11 1.11 0 0 1-1.125 1.125h-3.75C.469 19.125 0 18.656 0 18m19.125-1.125h3.75c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-3.75C18.469 19.125 18 18.656 18 18c0-.61.469-1.125 1.125-1.125m1.36-7.36c.421.47.421 1.172 0 1.594l-2.672 2.672c-.422.422-1.172.422-1.594 0s-.422-1.172 0-1.594l2.672-2.671c.422-.422 1.125-.422 1.593 0M7.734 23.86l-2.673 2.625a1.027 1.027 0 0 1-1.546 0 1.027 1.027 0 0 1 0-1.547l2.625-2.671c.422-.422 1.172-.422 1.593 0s.422 1.125 0 1.593M3.514 9.516a1.104 1.104 0 0 1 1.547 0l2.672 2.672c.422.421.422 1.171 0 1.593-.421.422-1.125.422-1.593 0L3.516 11.11c-.47-.421-.47-1.125 0-1.593m14.298 12.75 2.671 2.672a1.104 1.104 0 0 1 0 1.546c-.468.47-1.172.47-1.593 0l-2.672-2.625c-.422-.422-.422-1.172 0-1.593s1.172-.422 1.593 0' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'e15a832eadd7e1f11272f9608e8ea8cd__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedLoaderXlBoldIcon);
exports.default = ForwardRef;
