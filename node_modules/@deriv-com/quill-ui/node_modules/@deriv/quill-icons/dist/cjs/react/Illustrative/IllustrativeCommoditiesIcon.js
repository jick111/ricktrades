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
exports.IllustrativeCommoditiesIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const IllustrativeCommoditiesIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'm28.627 23.107-2.386-6.467a2 2 0 0 0-1.88-1.307h-1.907L20.24 9.307A2 2 0 0 0 18.36 8h-4.734c-.84 0-1.587.52-1.88 1.307L9.52 15.333H7.614c-.84 0-1.587.52-1.88 1.307l-2.387 6.467c-.08.2-.053.426.08.613.12.173.333.28.547.28H28a.68.68 0 0 0 .546-.28.67.67 0 0 0 .08-.613M13.014 9.773a.66.66 0 0 1 .627-.44h4.733c.28 0 .533.174.627.44l2.053 5.56H10.96zM16 21.413l-1.746-4.746h3.493zM4.96 22.667l2.054-5.56a.66.66 0 0 1 .626-.44h4.734c.28 0 .533.173.627.44l2.053 5.56zm12 0 2.054-5.56a.66.66 0 0 1 .627-.44h4.733c.28 0 .533.173.627.44l2.053 5.56z' })));
exports.IllustrativeCommoditiesIcon = IllustrativeCommoditiesIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.IllustrativeCommoditiesIcon);
exports.default = ForwardRef;
