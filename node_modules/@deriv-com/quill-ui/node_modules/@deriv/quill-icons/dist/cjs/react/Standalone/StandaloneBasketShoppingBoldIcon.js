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
exports.StandaloneBasketShoppingBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneBasketShoppingBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M14.242 6.617c.43.235.625.82.39 1.29L11.43 14h9.101l-3.203-6.094c-.234-.468-.039-1.054.39-1.289.47-.234 1.055-.039 1.29.39L22.64 14h3.672a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937h-.782l-2.187 8.75c-.274 1.094-1.29 1.875-2.422 1.875h-9.844c-1.172 0-2.148-.781-2.46-1.875l-2.15-8.75h-.78c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938H9.32l3.633-6.992c.235-.43.82-.625 1.29-.39m-5.86 9.258 2.071 8.281a.63.63 0 0 0 .625.469h9.844a.62.62 0 0 0 .586-.469l2.07-8.281zm5.118 2.813v3.125c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937v-3.125c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938m2.5-.938a.95.95 0 0 1 .938.938v3.125c0 .546-.43.937-.938.937-.547 0-.937-.39-.937-.937v-3.125c0-.508.39-.938.937-.938m4.375.938v3.125c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937v-3.125c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938' })));
exports.StandaloneBasketShoppingBoldIcon = StandaloneBasketShoppingBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneBasketShoppingBoldIcon);
exports.default = ForwardRef;
