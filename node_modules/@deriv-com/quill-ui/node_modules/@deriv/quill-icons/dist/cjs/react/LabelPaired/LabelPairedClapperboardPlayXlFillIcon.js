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
const LabelPairedClapperboardPlayXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm21.234 7.547-5.906 5.906-.047.047h-4.36l6-5.953.048-.047H21c.094 0 .14.047.234.047M18.422 13.5l4.922-4.875c.375.516.656 1.172.656 1.875v3zm-9-6h4.36l-5.954 5.953-.047.047h-4.36l6-5.953.048-.047zm-3.14 0L.327 13.453l-.047.047H0v-3c0-1.64 1.313-3 3-3zM0 15h24v10.5c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3zm10.125 3.094a.81.81 0 0 0-.375.656v6c0 .281.14.563.375.703.234.094.563.094.75-.047l4.5-3a.75.75 0 0 0 .375-.656c0-.234-.14-.469-.375-.61l-4.5-3c-.187-.14-.516-.14-.75-.046' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '16e7f3572961958db95674947ee58cee__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedClapperboardPlayXlFillIcon);
exports.default = ForwardRef;
