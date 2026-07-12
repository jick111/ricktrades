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
exports.StandaloneMessagesQuestionRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneMessagesQuestionRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M11.39 17.75h5.86c.664 0 1.25-.547 1.25-1.25V9c0-.664-.586-1.25-1.25-1.25H6c-.703 0-1.25.586-1.25 1.25v7.5c0 .703.547 1.25 1.25 1.25h1.25c.664 0 1.25.586 1.25 1.25v.625l2.148-1.602c.235-.156.47-.273.743-.273M17.25 19h-5.86l-3.163 2.383c-.196.156-.43.156-.665.078-.195-.117-.312-.313-.312-.586V19H6a2.47 2.47 0 0 1-2.5-2.5V9c0-1.367 1.094-2.5 2.5-2.5h11.25c1.367 0 2.5 1.133 2.5 2.5v7.5c0 1.406-1.133 2.5-2.5 2.5M16 24a2.47 2.47 0 0 1-2.5-2.5v-1.25h1.25v1.25c0 .703.547 1.25 1.25 1.25h4.57c.274 0 .547.117.742.273l2.188 1.602V24c0-.664.547-1.25 1.25-1.25H26c.664 0 1.25-.547 1.25-1.25V14c0-.664-.586-1.25-1.25-1.25h-5V11.5h5c1.367 0 2.5 1.133 2.5 2.5v7.5c0 1.406-1.133 2.5-2.5 2.5h-1.25v1.875c0 .273-.156.469-.352.586-.234.078-.468.078-.664-.078L20.57 24zM10.688 9.273c-.665 0-1.211.391-1.446.977v.04a.654.654 0 0 0 .39.82c.313.117.665-.079.782-.391l.04-.04c0-.117.116-.156.233-.156h1.602c.274 0 .469.196.469.43 0 .195-.078.352-.235.43l-1.21.703a.62.62 0 0 0-.313.547v.351c0 .352.273.625.625.625a.64.64 0 0 0 .625-.625l.898-.546c.547-.274.86-.86.86-1.446 0-.976-.781-1.719-1.719-1.719zm.937 7.032a.76.76 0 0 0 .781-.43.76.76 0 0 0 0-.898c-.156-.274-.469-.47-.781-.43a.85.85 0 0 0-.82.43.76.76 0 0 0 0 .898c.156.313.468.469.82.43' })));
exports.StandaloneMessagesQuestionRegularIcon = StandaloneMessagesQuestionRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneMessagesQuestionRegularIcon);
exports.default = ForwardRef;
