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
const LabelPairedLocationCrosshairsXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M12 6c.797 0 1.5.703 1.5 1.5v1.64a9.07 9.07 0 0 1 7.36 7.36h1.64c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-1.64c-.657 3.797-3.61 6.75-7.36 7.406V28.5c0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5v-1.594A9.07 9.07 0 0 1 3.094 19.5H1.5A1.48 1.48 0 0 1 0 18c0-.797.656-1.5 1.5-1.5h1.594c.656-3.75 3.61-6.703 7.406-7.36V7.5c0-.797.656-1.5 1.5-1.5M6 18a5.97 5.97 0 0 0 3 5.203c1.828 1.078 4.125 1.078 6 0 1.828-1.078 3-3.047 3-5.203 0-2.11-1.172-4.078-3-5.156-1.875-1.078-4.172-1.078-6 0A5.95 5.95 0 0 0 6 18m6-3.75c1.313 0 2.531.75 3.234 1.875.657 1.172.657 2.625 0 3.75-.703 1.172-1.921 1.875-3.234 1.875-1.36 0-2.578-.703-3.281-1.875-.656-1.125-.656-2.578 0-3.75C9.422 15 10.64 14.25 12 14.25' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '6ab320a02006e61818449b71bbcb7213__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedLocationCrosshairsXlFillIcon);
exports.default = ForwardRef;
