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
exports.StandaloneSterlingSignBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneSterlingSignBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M13.5 12.75v2.5h5.313a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H13.5v2.5c0 .977-.273 1.953-.742 2.852l-.508.898h9.063a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H10.688c-.352 0-.665-.156-.82-.43-.157-.312-.196-.664-.04-.937l1.29-2.305c.312-.625.507-1.289.507-1.953v-2.5h-.937c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h.937v-2.5c0-2.773 2.227-5 4.96-5 .509 0 1.056.117 1.563.273l3.125 1.055c.508.156.782.664.586 1.172-.156.508-.664.742-1.172.586L17.563 9.82a2.9 2.9 0 0 0-.976-.195c-1.719 0-3.086 1.406-3.086 3.125' })));
exports.StandaloneSterlingSignBoldIcon = StandaloneSterlingSignBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneSterlingSignBoldIcon);
exports.default = ForwardRef;
