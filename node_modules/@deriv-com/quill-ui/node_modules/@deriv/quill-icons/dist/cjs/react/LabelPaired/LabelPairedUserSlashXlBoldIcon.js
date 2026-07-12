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
const LabelPairedUserSlashXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 30, height: 36, viewBox: '0 0 30 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.781 6.281 9 11.906A5.99 5.99 0 0 1 15 6c3.281 0 6 2.719 6 6 0 2.813-1.922 5.11-4.453 5.813L29.53 28.03c.516.375.61 1.078.188 1.547-.375.516-1.078.61-1.547.188L.422 8.016c-.516-.375-.61-1.078-.188-1.547.375-.516 1.079-.61 1.547-.188m11.813 9.235c.422.14.89.234 1.406.234 2.063 0 3.75-1.64 3.75-3.75A3.76 3.76 0 0 0 15 8.25 3.73 3.73 0 0 0 11.25 12c0 .844.234 1.594.656 2.203zm-1.219 4.78 2.813 2.204h-2.344c-3.094 0-5.625 2.297-6.047 5.25H21.89l2.718 2.156c-.187.094-.328.094-.515.094H5.859c-.75 0-1.359-.61-1.359-1.36 0-4.453 3.469-8.109 7.875-8.343' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '59bb72e67a7eb10ee263b1082a381386__a' },
            React.createElement("path", { d: 'M0 0h30v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedUserSlashXlBoldIcon);
exports.default = ForwardRef;
