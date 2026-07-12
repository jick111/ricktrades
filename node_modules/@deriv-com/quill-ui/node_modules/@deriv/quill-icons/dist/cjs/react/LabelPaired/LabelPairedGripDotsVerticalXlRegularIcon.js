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
const LabelPairedGripDotsVerticalXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 36, viewBox: '0 0 12 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3 10.5c0-.375-.375-.75-.75-.75-.422 0-.75.375-.75.75 0 .422.328.75.75.75.375 0 .75-.328.75-.75m-3 0C0 9.703.422 9 1.125 8.578c.656-.422 1.547-.422 2.25 0C4.031 9 4.5 9.703 4.5 10.5c0 .844-.469 1.547-1.125 1.969-.703.422-1.594.422-2.25 0C.422 12.047 0 11.344 0 10.5M3 18c0-.375-.375-.75-.75-.75-.422 0-.75.375-.75.75 0 .422.328.75.75.75.375 0 .75-.328.75-.75m-3 0c0-.797.422-1.5 1.125-1.922.656-.422 1.547-.422 2.25 0C4.031 16.5 4.5 17.203 4.5 18c0 .844-.469 1.547-1.125 1.969-.703.422-1.594.422-2.25 0C.422 19.547 0 18.844 0 18m2.25 8.25c.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75-.422 0-.75.375-.75.75 0 .422.328.75.75.75m0-3c.797 0 1.5.469 1.922 1.125.422.703.422 1.594 0 2.25-.422.703-1.125 1.125-1.922 1.125-.844 0-1.547-.422-1.969-1.125-.422-.656-.422-1.547 0-2.25.422-.656 1.125-1.125 1.969-1.125M10.5 10.5c0-.375-.375-.75-.75-.75-.422 0-.75.375-.75.75 0 .422.328.75.75.75.375 0 .75-.328.75-.75m-3 0c0-.797.422-1.5 1.125-1.922.656-.422 1.547-.422 2.25 0C11.531 9 12 9.703 12 10.5c0 .844-.469 1.547-1.125 1.969-.703.422-1.594.422-2.25 0C7.922 12.047 7.5 11.344 7.5 10.5m2.25 8.25c.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75-.422 0-.75.375-.75.75 0 .422.328.75.75.75m0-3c.797 0 1.5.469 1.922 1.125.422.703.422 1.594 0 2.25-.422.703-1.125 1.125-1.922 1.125-.844 0-1.547-.422-1.969-1.125-.422-.656-.422-1.547 0-2.25.422-.656 1.125-1.125 1.969-1.125m.75 9.75c0-.375-.375-.75-.75-.75-.422 0-.75.375-.75.75 0 .422.328.75.75.75.375 0 .75-.328.75-.75m-3 0c0-.797.422-1.5 1.125-1.922.656-.422 1.547-.422 2.25 0C11.531 24 12 24.703 12 25.5c0 .844-.469 1.547-1.125 1.969-.703.422-1.594.422-2.25 0C7.922 27.047 7.5 26.344 7.5 25.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'e6fade1ad258d22b56b4788310be885d__a' },
            React.createElement("path", { d: 'M0 0h12v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedGripDotsVerticalXlRegularIcon);
exports.default = ForwardRef;
