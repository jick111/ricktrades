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
exports.StandaloneDollarSignRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneDollarSignRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M16.625 7.125v1.914c1.21.117 2.422.352 3.242.586a.6.6 0 0 1 .469.742.6.6 0 0 1-.742.469c-1.29-.313-3.203-.703-4.844-.547-.82.078-1.562.274-2.07.586-.508.352-.86.82-1.016 1.602-.117.546-.039.976.117 1.289.156.351.43.625.86.898.859.547 2.109.86 3.515 1.25h.04c1.327.352 2.773.742 3.827 1.406.547.352 1.016.782 1.29 1.367q.468.938.234 2.11c-.274 1.328-1.211 2.226-2.461 2.734-.703.274-1.563.43-2.461.469v1.875A.617.617 0 0 1 16 26.5a.617.617 0 0 1-.625-.625v-1.914c-.234-.04-.508-.04-.742-.078-1.016-.156-2.578-.508-3.906-1.094-.313-.117-.43-.508-.313-.82.156-.313.508-.469.82-.313 1.172.508 2.618.82 3.555.977 1.524.234 2.852.117 3.828-.274.977-.39 1.524-.976 1.68-1.797.117-.585.039-.976-.117-1.328a2 2 0 0 0-.86-.859c-.86-.547-2.11-.898-3.476-1.25l-.078-.04c-1.328-.312-2.774-.702-3.79-1.366a3.8 3.8 0 0 1-1.328-1.406q-.41-.88-.234-2.11c.234-1.094.781-1.836 1.563-2.383.78-.468 1.718-.703 2.656-.78.234-.04.469-.04.742-.04V7.125c0-.312.273-.625.625-.625.313 0 .625.313.625.625' })));
exports.StandaloneDollarSignRegularIcon = StandaloneDollarSignRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneDollarSignRegularIcon);
exports.default = ForwardRef;
