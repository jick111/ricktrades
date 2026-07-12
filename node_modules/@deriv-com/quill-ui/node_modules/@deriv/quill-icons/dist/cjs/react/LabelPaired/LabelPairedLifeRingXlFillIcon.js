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
const LabelPairedLifeRingXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm17.203 25.36-2.719-2.72c-.75.422-1.593.61-2.484.61-.937 0-1.781-.187-2.531-.61L6.75 25.36A9.2 9.2 0 0 0 12 27c1.922 0 3.703-.61 5.203-1.64m4.219.046h.047c.422.563.328 1.407-.188 1.922a1.495 1.495 0 0 1-1.922.14C17.297 29.064 14.766 30 12 30c-2.812 0-5.344-.937-7.406-2.531a1.495 1.495 0 0 1-1.922-.14 1.495 1.495 0 0 1-.14-1.923A12 12 0 0 1 0 18c0-2.766.938-5.297 2.531-7.36a1.495 1.495 0 0 1 .14-1.921c.517-.516 1.36-.61 1.923-.188C6.656 6.984 9.188 6 12 6c2.766 0 5.297.984 7.36 2.531.562-.422 1.406-.328 1.921.188.516.515.563 1.36.14 1.922 1.595 2.062 2.532 4.593 2.532 7.359 0 2.813-.937 5.344-2.531 7.406m-2.11-2.156C20.345 21.75 21 19.969 21 18c0-1.922-.656-3.703-1.687-5.203l-2.72 2.719c.423.75.61 1.593.61 2.484 0 .938-.187 1.781-.61 2.531zm-2.109-12.562C15.703 9.656 13.922 9 12 9c-1.969 0-3.75.656-5.25 1.688l2.719 2.718a5.04 5.04 0 0 1 2.484-.656c.938 0 1.781.234 2.531.656zM7.36 20.53c-.421-.75-.609-1.593-.609-2.484 0-.938.188-1.781.61-2.531l-2.72-2.72C3.61 14.297 3 16.079 3 18c0 1.969.61 3.75 1.64 5.25zM9.75 18c0 .844.422 1.547 1.125 1.969.656.422 1.547.422 2.25 0 .656-.422 1.125-1.125 1.125-1.969 0-.797-.469-1.5-1.125-1.922-.703-.422-1.594-.422-2.25 0C10.172 16.5 9.75 17.203 9.75 18' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '603e9050095ab3aed14eda263d66a18d__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedLifeRingXlFillIcon);
exports.default = ForwardRef;
