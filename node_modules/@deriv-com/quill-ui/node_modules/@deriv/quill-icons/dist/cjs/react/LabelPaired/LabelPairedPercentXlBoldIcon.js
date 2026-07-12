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
const LabelPairedPercentXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 36, viewBox: '0 0 18 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm17.297 11.297-15.047 15a1.027 1.027 0 0 1-1.547 0c-.469-.422-.469-1.125 0-1.594l15-14.953c.422-.469 1.125-.469 1.594 0a1.103 1.103 0 0 1 0 1.547M5.25 12c0 .844-.469 1.547-1.125 1.969-.703.422-1.594.422-2.25 0C1.172 13.547.75 12.844.75 12c0-.797.422-1.5 1.125-1.922.656-.422 1.547-.422 2.25 0C4.781 10.5 5.25 11.203 5.25 12m12 12c0 .844-.469 1.547-1.125 1.969-.703.422-1.594.422-2.25 0-.703-.422-1.125-1.125-1.125-1.969 0-.797.422-1.5 1.125-1.922.656-.422 1.547-.422 2.25 0 .656.422 1.125 1.125 1.125 1.922' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'e29bfd6916e938d4399fd15efdaaf088__a' },
            React.createElement("path", { d: 'M0 0h18v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPercentXlBoldIcon);
exports.default = ForwardRef;
