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
const LabelPairedEyeSlashXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 30, height: 36, viewBox: '0 0 30 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm1.781 6.281 5.25 4.078C9.141 8.766 11.766 7.5 15 7.5c3.75 0 6.797 1.734 9 3.797 2.203 2.015 3.656 4.453 4.36 6.14.14.375.14.797 0 1.172-.61 1.5-1.876 3.657-3.75 5.532l4.921 3.89c.516.375.61 1.078.188 1.547-.375.516-1.078.61-1.547.188L.422 8.016c-.516-.375-.61-1.078-.188-1.547.375-.516 1.079-.61 1.547-.188m8.672 6.75 4.219 3.328c.187-.422.328-.843.328-1.312 0-.375-.094-.656-.187-.985-.047-.234.093-.562.374-.515 1.922.047 3.61 1.36 4.126 3.328a4.52 4.52 0 0 1-.188 2.953l1.781 1.406A6.8 6.8 0 0 0 21.75 18c0-3.703-3.047-6.75-6.75-6.75a6.7 6.7 0 0 0-4.547 1.781m7.031 11.25L20.906 27A12.3 12.3 0 0 1 15 28.5c-3.797 0-6.844-1.687-9.047-3.75s-3.656-4.5-4.36-6.14a1.68 1.68 0 0 1 0-1.172c.47-1.079 1.22-2.438 2.298-3.844l4.406 3.469c-.047.328-.047.656-.047.937 0 3.75 3 6.75 6.75 6.75.844 0 1.688-.14 2.484-.469' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '900bcce9b79eb808f8a6dfbc81e476f3__a' },
            React.createElement("path", { d: 'M0 0h30v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedEyeSlashXlFillIcon);
exports.default = ForwardRef;
