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
exports.IllustrativeDerivedIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const IllustrativeDerivedIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M16 3.333C9.013 3.333 3.333 9.013 3.333 16S9.013 28.667 16 28.667 28.667 22.987 28.667 16 22.987 3.333 16 3.333m0 24c-1.173 0-2.427-1.96-3.173-5.16A31 31 0 0 1 16 22c1.08 0 2.147.067 3.173.173-.746 3.187-2 5.16-3.173 5.16m0-6.666q-1.78 0-3.44.2a30 30 0 0 1-.387-4.2h7.64a26.7 26.7 0 0 1-.386 4.2 32 32 0 0 0-3.44-.2zm0-16c1.173 0 2.427 1.96 3.173 5.16A31 31 0 0 1 16 10c-1.08 0-2.147-.067-3.173-.173.746-3.187 2-5.16 3.173-5.16m0 6.666q1.78 0 3.44-.2c.213 1.267.347 2.667.387 4.2h-7.64c.026-1.52.16-2.933.386-4.2 1.107.12 2.254.2 3.44.2zm-11.293 4c.12-2.106.813-4.053 1.933-5.693 1.28.587 2.867 1.027 4.627 1.32a29 29 0 0 0-.4 4.373zm6.133 1.334c.027 1.48.173 2.973.4 4.373-1.76.293-3.333.733-4.627 1.32-1.12-1.64-1.8-3.6-1.933-5.693zm16.453 0a11.2 11.2 0 0 1-1.933 5.693c-1.28-.587-2.867-1.027-4.627-1.32.24-1.4.374-2.893.4-4.373zm-6.146-1.334a31 31 0 0 0-.4-4.373c1.76-.293 3.333-.733 4.626-1.32 1.12 1.64 1.8 3.6 1.934 5.693zM24.52 8.56c-1.133.467-2.507.84-4.04 1.08-.427-1.867-1.04-3.507-1.84-4.653 2.32.56 4.36 1.826 5.88 3.56zM13.347 4.987c-.8 1.133-1.414 2.773-1.84 4.653-1.52-.24-2.907-.613-4.04-1.08A11.3 11.3 0 0 1 13.347 5zM7.467 23.44c1.133-.467 2.506-.84 4.04-1.08.426 1.867 1.04 3.507 1.84 4.653a11.37 11.37 0 0 1-5.88-3.56zM18.653 27c.8-1.133 1.414-2.773 1.84-4.653 1.52.24 2.907.613 4.04 1.08a11.3 11.3 0 0 1-5.88 3.56z' })));
exports.IllustrativeDerivedIcon = IllustrativeDerivedIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.IllustrativeDerivedIcon);
exports.default = ForwardRef;
