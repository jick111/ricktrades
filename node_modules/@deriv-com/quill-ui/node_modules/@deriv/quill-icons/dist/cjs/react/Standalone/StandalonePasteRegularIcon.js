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
exports.StandalonePasteRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandalonePasteRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M11.313 8.531c-.04.274-.313.469-.626.469h-.312a.64.64 0 0 0-.625.625v.625h5v-.625c0-.312-.312-.625-.625-.625h-.352a.63.63 0 0 1-.625-.469c-.078-.43-.468-.781-.898-.781a.964.964 0 0 0-.937.781M12.25 6.5c.86 0 1.602.547 1.953 1.25H16c1.367 0 2.5 1.133 2.5 2.5h-1.25C17.25 9.586 16.664 9 16 9h-.117c.078.195.117.43.117.625v.703a3.06 3.06 0 0 0-1.875 1.172H9.75c-.703 0-1.25-.547-1.25-1.25v-.625c0-.195.04-.43.078-.625H8.5c-.703 0-1.25.586-1.25 1.25V21.5c0 .703.547 1.25 1.25 1.25h5V24h-5A2.47 2.47 0 0 1 6 21.5V10.25c0-1.367 1.094-2.5 2.5-2.5h1.758c.351-.703 1.094-1.25 1.992-1.25M23.5 25.25c.664 0 1.25-.547 1.25-1.25v-7.969a.63.63 0 0 0-.195-.43l-2.657-2.656a.63.63 0 0 0-.43-.195H17.25c-.703 0-1.25.586-1.25 1.25v10c0 .703.547 1.25 1.25 1.25zm1.914-10.547c.352.352.586.86.586 1.328V24c0 1.406-1.133 2.5-2.5 2.5h-6.25a2.47 2.47 0 0 1-2.5-2.5V14c0-1.367 1.094-2.5 2.5-2.5h4.219c.468 0 .976.195 1.328.547z' })));
exports.StandalonePasteRegularIcon = StandalonePasteRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandalonePasteRegularIcon);
exports.default = ForwardRef;
