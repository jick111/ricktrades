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
const LabelPairedPuzzlePieceTwoXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 30, height: 36, viewBox: '0 0 30 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M14.625 19.031c0-.234-.047-.422-.187-.562-.047-.14-.188-.235-.282-.328-.094-.047-.14-.141-.187-.188-.094-.094-.094-.187-.094-.328 0-.14.094-.328.281-.516.188-.14.516-.234.844-.234s.656.094.844.234c.094.094.14.188.187.235.047.093.094.187.094.281a.65.65 0 0 1-.281.516c-.235.187-.469.468-.469.89 0 .235.094.469.234.657a.95.95 0 0 0 .704.28h2.015c.188 0 .375.188.375.376v1.406a.94.94 0 0 0 .938.938c.375 0 .656-.235.797-.47.187-.234.328-.327.515-.327.188 0 .328.14.516.328.14.187.234.515.234.843 0 .375-.094.704-.234.891-.188.235-.328.281-.516.281-.187 0-.328-.047-.515-.28-.141-.235-.422-.47-.797-.47a.94.94 0 0 0-.938.938v2.906c0 .235-.187.422-.375.422h-2.015a.2.2 0 0 1-.188-.187c0-.047.047-.141.14-.235.376-.281.61-.656.61-1.125s-.234-.89-.61-1.125A2 2 0 0 0 15 24.61a2 2 0 0 0-1.266.47c-.375.233-.609.655-.609 1.124s.234.844.61 1.125c.093.094.14.188.14.235a.2.2 0 0 1-.187.187h-2.11c-.187 0-.375-.187-.375-.422v-6.984c0-.188.188-.375.375-.375h2.11a.94.94 0 0 0 .937-.938m-.89-.234c-.188-.14-.329-.281-.422-.469-.141-.187-.188-.422-.188-.703 0-.469.234-.844.61-1.125A2.27 2.27 0 0 1 15 16.078c.469 0 .938.188 1.266.422.187.14.28.281.375.422.14.234.234.469.234.703 0 .516-.234.89-.61 1.172-.093.094-.14.187-.14.234s0 .094.047.094c.047.047.094.047.14.047h2.016c.235 0 .375-.14.375-.375v-6.985c0-.187-.14-.421-.375-.421h-2.015c-.516 0-.938-.375-.938-.938 0-.375.234-.656.469-.844.187-.187.281-.328.281-.515a.65.65 0 0 0-.281-.516A1.5 1.5 0 0 0 15 8.297c-.328 0-.656.14-.844.281a.65.65 0 0 0-.281.516c0 .187.094.328.281.515.235.188.469.47.469.844 0 .563-.422.938-.937.938h-2.063c-.187 0-.375.187-.375.422v1.359c0 .562-.422.937-.937.937-.376 0-.657-.187-.797-.421-.188-.235-.328-.329-.516-.329-.187 0-.328.094-.516.329-.14.187-.234.468-.234.843 0 .328.094.656.234.844.188.234.329.328.516.328.188 0 .328-.094.516-.328.14-.234.422-.469.797-.469.515 0 .937.422.937.985v2.906a.37.37 0 0 0 .375.375h2.063c.093 0 .187-.047.187-.14 0-.048 0-.095-.047-.141-.047-.047-.047-.094-.094-.141z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '1975989ffc3de7741d49aec1286af19e__a' },
            React.createElement("path", { d: 'M0 0h30v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPuzzlePieceTwoXlFillIcon);
exports.default = ForwardRef;
